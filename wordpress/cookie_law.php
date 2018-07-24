<?php
    function iubenda_system( $html ) {
        if ( ! function_exists( "file_get_html" ) ) {
            require_once( "simple_html_dom.php" );
        }
 
        require_once( "iubenda.class.php" );

        $page = new iubendaPage( $html );
 
        if (! $page->consent_given() && ! $page->bot_detected() ) {
            $page->parse();
            $html = $page->get_converted_page();
        }
 
        return $html;
    }
    
    ob_start( "iubenda_system" );
?>
