<!-- as suggested by https://gist.github.com/mircobabini/de33dab69ca7598f39b6 -->
<!-- replace 000001 with the site_id from your specific iubenda embed code -->
<!-- replace 000002 with the policy_id from your EN iubenda embed code -->
<!-- replace 000003 with the policy_id from your IT iubenda embed code -->

<script type="text/javascript">
var lang_id = jQuery('html').attr('lang').split('-')[0]
  , site_id = 000001; // site_id from iubenda embed code
switch( lang_id ){
	case 'en':
		var policy_id = 000002; // policy_id from iubenda embed code EN
		break;
	case 'it':
		var policy_id = 000003; // policy_id from iubenda embed code IT
		break;
	// case 'other language code' ...
}
var _iub = _iub || [];
_iub.csConfiguration = {
	cookiePolicyId: policy_id,
	siteId: site_id,
	lang: lang_id
};
(function (w, d) {
	var loader = function () { var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src = "//cdn.iubenda.com/cookie_solution/iubenda_cs.js"; tag.parentNode.insertBefore(s, tag); };
	if (w.addEventListener) { w.addEventListener("load", loader, false); } else if (w.attachEvent) { w.attachEvent("onload", loader); } else { w.onload = loader; }
})(window, document);
</script>
