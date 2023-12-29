import "../sass/styles.scss";

document.addEventListener(
    "DOMContentLoaded",
    function () {
        // Slider Home Page
        let index = 0;
        let itemsPerPage = 3;
        const slides = document.querySelectorAll(".slider img");
        const totalSlides = slides.length;

        document.querySelector(".next").addEventListener("click", () => {
            index = (index + 1) % totalSlides; // Loop back to first image
            updateSliderPosition();
        });

        document.querySelector(".prev").addEventListener("click", () => {
            index = (index - 1 + totalSlides) % totalSlides; // Loop back to last image
            updateSliderPosition();
        });

        function updateSliderPosition() {
            const slider = document.querySelector(".slider");
            slider.style.transform = `translateX(-${
                index * (100 / totalSlides)
            }%)`;
        }

        // Carousel Home Page
        var container = document.querySelector(".carousel-container");
        var elements = container.querySelector(".carousel-container__elements");
        var items = Array.from(elements.querySelectorAll(".carousel-item"));
        var prevButton = container.querySelector(".carousel-button-prev");
        var nextButton = container.querySelector(".carousel-button-next");
        var currentIndex = 0;

        function updateButtons() {
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === items.length % itemsPerPage;
        }

        prevButton.addEventListener("click", function () {
            if (currentIndex > 0) {
                --currentIndex;
                elements.scrollLeft = items[currentIndex].offsetLeft;
            } else {
                elements.scrollLeft -= 100; // Scroll past the start
                setTimeout(function () {
                    elements.scrollLeft = 0; // Bounce back
                }, 500);
            }
            updateButtons();
        });

        nextButton.addEventListener("click", function () {
            if (currentIndex < items.length - 1) {
                ++currentIndex;
                elements.scrollLeft = items[currentIndex].offsetLeft;
            } else {
                elements.scrollLeft += 100; // Scroll past the end
                setTimeout(function () {
                    elements.scrollLeft = items[items.length - 1].offsetLeft; // Bounce back
                }, 500);
            }
            updateButtons();
        });

        updateButtons();
    },
    false
);
