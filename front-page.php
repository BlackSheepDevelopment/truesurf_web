<?php

/**
 * Template Name: Home
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();

?>
<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <div class="slider-container">
            <div class="slider">
                <?php
                // Show the slider images
                if (get_field('homebanner_slider')) {
                    $homebanner = get_field('homebanner_slider');
                    $banner_1 = $homebanner['banner_1'];
                    $banner_2 = $homebanner['banner_2'];
                    $banner_3 = $homebanner['banner_3'];
                ?>
                    <div class="slider__image">
                        <div class="slider__image__info">
                            <p class="slider__image__info__text"><?php echo $banner_1['banner_title'] ?></p>
                            <a href="<?php echo $banner_1['banner_link'] ?>" class="slider__image__info__link"><?php echo $banner_1['banner_button'] ?></a>
                        </div>
                        <img class="slider__image__img" src="<?php echo esc_url($banner_1['banner_img']['url']) ?>" alt=" bs-banner-1">
                    </div>
                    <div class="slider__image slider__image--2">
                        <div class="slider__image__info">
                            <p class="slider__image__info__text"><?php echo $banner_2['banner_title'] ?></p>
                            <a href="<?php echo $banner_2['banner_link'] ?>" class="slider__image__info__link"><?php echo $banner_2['banner_button'] ?></a>
                        </div>
                        <img class="slider__image__img" src="<?php echo esc_url($banner_2['banner_img']['url']) ?>" alt=" bs-banner-3">
                    </div>
                    <div class="slider__image">
                        <div class="slider__image__info">
                            <p class="slider__image__info__text"><?php echo $banner_3['banner_title'] ?></p>
                            <a href="<?php echo $banner_3['banner_link'] ?>" class="slider__image__info__link"><?php echo $banner_3['banner_button'] ?></a>
                        </div>
                        <img class="slider__image__img" src="<?php echo esc_url($banner_3['banner_img']['url']) ?>" alt=" bs-banner-3">
                    </div>
                <?php
                }
                ?>
            </div>
            <button class="prev">
                <img class="slider__arrow" src="<?php echo get_stylesheet_directory_uri() . '/src/images/icons/arrow.svg' ?>" />
            </button>
            <button class="next">
                <img class="slider__arrow slider__arrow--right" src="<?php echo get_stylesheet_directory_uri() . '/src/images/icons/arrow.svg' ?>" />
            </button>
        </div>

        <!-- Show the top 5 products from the woocommerce -->
        <div class="col-full top-products">
            <p class="top-products__title">Los más vendidos</p>
            <?php
            $args = array(
                'post_type' => 'product',
                'posts_per_page' => 5,
                'meta_key' => 'total_sales',
                'orderby' => 'meta_value_num',
            );
            $loop = new WP_Query($args);

            if ($loop->have_posts()) {
                echo '<div class="carousel-container">';
                echo '<button class="carousel-button carousel-button-prev">Prev</button>';
                echo '<div class="carousel-container__elements">';
                while ($loop->have_posts()) : $loop->the_post();
                    global $product;
                    echo '<div class="carousel-item">';
                    echo '<a href="' . get_permalink() . '">';
                    echo woocommerce_get_product_thumbnail();
                    echo '<h3>' . get_the_title() . '</h3>';
                    echo '<span class="price">' . $product->get_price_html() . '</span>';
                    echo '</a>';
                    echo '</div>';
                endwhile;
                echo '</div>';
                echo '<button class="carousel-button carousel-button-next">Next</button>';
                echo '</div>';
            } else {
                echo __('No products found');
            }
            wp_reset_postdata(); ?>
        </div>

        <div class="col-full categories">
            <p class="categories__title">Categorías</p>
            <div class="categories-container">
                <a class="custom-btn btn-15" href="<?php echo get_term_link(get_term_by('slug', 'pitas', 'product_cat')->term_id); ?>">
                    <img class="categories__item__icon" src="<?php echo get_stylesheet_directory_uri() . '/src/images/icons/ICON_TW.png' ?>" />

                    <p class="categories__item__title">Pitas</p>
                </a>
                <a class="custom-btn btn-15" href="<?php echo get_term_link(get_term_by('slug', 'decks', 'product_cat')->term_id); ?>">
                    <img class="categories__item__icon" src="<?php echo get_stylesheet_directory_uri() . '/src/images/icons/ICON_HP.png' ?>" />

                    <p class="categories__item__title">Decks</p>
                </a>
                <a class="custom-btn btn-15" href="<?php echo get_term_link(get_term_by('slug', 'tablas', 'product_cat')->term_id); ?>">
                    <img class="categories__item__icon" src="<?php echo get_stylesheet_directory_uri() . '/src/images/icons/ICON_CABLEADOS.png' ?>" />

                    <p class="categories__item__title">
                        Tablas
                    </p>
                </a>
                <a class="custom-btn btn-15" href="<?php echo get_term_link(get_term_by('slug', 'fundas', 'product_cat')->term_id); ?>">
                    <img class="categories__item__icon" src="<?php echo get_stylesheet_directory_uri() . '/src/images/icons/ICON_LENTES.png' ?>" />

                    <p class="categories__item__title">
                        Fundas
                    </p>
                </a>
            </div>

        </div>

        <div class="info-container">
            <div class="info-container__content">
                <p class="info-container__content__title">Encuentra una tabla perfecta para ti</p>
                <p class="info-container__content__info">
                    Recibe asesoría personalizada para encontrar la tabla que mejor se adapte a tus objetivos y actividades en Surf.
                </p>
                <a src="https://wa.link/9720fg" class="info-container__content__button">Contáctanos aquí</a>
            </div>
            <img src="<?php echo get_stylesheet_directory_uri() . '/src/images/BS_BANNER_6.jpg' ?>" class="info-container__image" />
        </div>

        <div class="find-us col-full">
            <p class="find-us__title">Sigamos en contacto</p>
            <p class="find-us__subtitle">¡Suscríbete a nuestro newsletter y recibe 10% en tu primera compra!</p>
            <input class="find-us__input" />
            <button class="find-us__button">¡Inscríbete ya!</button>
        </div>
    </main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
