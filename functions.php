<?php

/* Load assets */
function load_assets($entries)
{
    $assets = file_get_contents(get_stylesheet_directory() . '/assets.json');
    $assets = json_decode($assets);

    foreach ($assets as $chunk => $files) {
        foreach ($entries as $entry) {
            if ($chunk == $entry) {
                foreach ($files as $type => $asset) {
                    switch ($type) {
                        case 'js':
                            wp_enqueue_script($chunk, get_stylesheet_directory_uri() . '/' . $asset, array(), false, true);
                            break;
                        case 'css':
                            wp_enqueue_style($chunk, get_stylesheet_directory_uri() . '/' . $asset);
                    }
                }
            }
        }
    }
}



add_action('bs_after_shop_loop', 'storefront_sorting_wrapper', 9);
add_action('bs_after_shop_loop', 'woocommerce_pagination', 30);
add_action('bs_after_shop_loop', 'storefront_sorting_wrapper_close', 31);

// add_action( 'woocommerce_after_shop_loop', 'storefront_sorting_wrapper', 9 );
// add_action( 'woocommerce_after_shop_loop', 'woocommerce_catalog_ordering', 10 );
// add_action( 'woocommerce_after_shop_loop', 'woocommerce_result_count', 20 );
// add_action( 'woocommerce_after_shop_loop', 'woocommerce_pagination', 30 );
// add_action( 'woocommerce_after_shop_loop', 'storefront_sorting_wrapper_close', 31 );


// Añadir encabezado de página de acuerdo a requerimientos (Logo, Tienda y Carrito)
add_action("bs_header", "add_bs_logo");
add_action("bs_header", "storefront_primary_navigation");
add_action("bs_header", "storefront_header_cart");


function add_bs_logo()
{
?>
    <div class="header__logo">
        <a href="<?php echo get_home_url(); ?>">
            <img src="<?php echo get_stylesheet_directory_uri() . '/src/images/BS_LOGO_BLACK.png'; ?>" alt="blacksheep-logo">
        </a>
    </div>
<?php
}


add_action("bs_footer", "storefront_footer_widgets", 10);
