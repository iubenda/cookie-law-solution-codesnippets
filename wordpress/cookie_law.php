```php
<?php
function iubenda_system( $html, $type = 'page' ) {
	if ( empty( $html ) )
		return;
	require_once( 'iubenda.class.php' );
	// separator
	if ( ! iubendaParser::consent_given() && ! iubendaParser::bot_detected() ) {
		$iubenda = new iubendaParser( $html, array( 'type' => in_array( $type, array( 'page', 'faster' ), true ) ? $type : 'page' ) );
		$html = $iubenda->parse();
	}
	// finished
	return $html;
}
```
