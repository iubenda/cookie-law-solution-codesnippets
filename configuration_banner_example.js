<script type="text/javascript">
var _iub = _iub || [];
  _iub.csConfiguration = {
    siteId: 234578,
    cookiePolicyId: 340542,
    cookiePolicyUrl: 'http://www.site.com/cookie-policy',
    enableRemoteConsent: false,
    consentOnScroll: false,
    banner: {
        slideDown: false,
    	zIndex: 99999998,
    	content: "
Informativa
" +
    	"
Questo sito o gli strumenti terzi da questo utilizzati si avvalgono di cookie necessari al funzionamento ed utili alle finalit&agrave; illustrate nella cookie policy. Se vuoi saperne di pi&ugrave; o negare il consenso a tutti o ad alcuni cookie, consulta la %{cookie_policy_link}.
Chiudendo questo banner, scorrendo questa pagina o cliccando qualunque suo elemento acconsenti all’uso dei cookie.
",
    	cookiePolicyLinkCaption: "cookie policy",
        backgroundColor: "#CCC",
        textColor: "#000",
        fontSize: "12px",
        innerHtmlCloseBtn: "OK"
    },
    footer: {
    	message: 'Proseguendo la navigazione o chiudendo la finestra presti il tuo consenso all\'installazione dei cookie.',
    	btnCaption: 'Prosegui la navigazione'
    },
    callback: {
    	onBannerShown: function(){doSomethingOnBannerShown()},
    	onConsentGiven: function(){setCustomCookies()}
    },
    preferenceCookie: {
    	expireAfter: 365
    },    
    consentOnButton: true,
  };
  (function (w, d) {
    var loader = function () { var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src = "//cdn.iubenda.com/cookie_solution/iubenda_cs.js"; tag.parentNode.insertBefore(s, tag); };
    if (w.addEventListener) { w.addEventListener("load", loader, false); } else if (w.attachEvent) { w.attachEvent("onload", loader); } else { w.onload = loader; }
    })(window, document);
</script>
