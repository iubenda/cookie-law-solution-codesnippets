<?php
    function iubenda_system( $html ) {
        if ( ! function_exists( "file_get_html" ) ) {
            require_once( "simple_html_dom.php" );
        }
 
        require_once( "iubenda.class.php" );
        /*For experimental "faster" class add this line here: 
        require_once( "iubenda.class.faster.php" ); */

        $page = new iubendaPage( $html );
 
        if (! $page->consent_given() && ! $page->bot_detected() ) {
            $page->parse();/*For experimental class, replace this line with: $parser = new iubendaFaster(); */
            $html = $page->get_converted_page();/*For experimental class, replace this line with: $html = $parser -> isParse( mb_convert_encoding( $content, "HTML-ENTITIES", "UTF-8" ) ); */
        }
 
        return $html;
    }
    
    ob_start( "iubenda_system" );?>
