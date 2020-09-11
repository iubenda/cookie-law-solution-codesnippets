<script type=”text/javascript”>
	function iubendaIsConsentGiven(){
            if( 'consentIsGiven' in window && (consentIsGiven === true || consentIsGiven === false)) 
    return consentIsGiven;
            if(!('_iub' in window && 'csConfiguration' in _iub)) return false;
            var siteId = _iub.csConfiguration.siteId || '';
            var cookiePolicyId = _iub.csConfiguration.cookiePolicyId || '';
            var cs = document.cookie.split(';');
            var consentIsGiven = false;
            for (var i = 0; i < cs.length; i++) {
                while (cs[i].charAt(0) == ' ') cs[i] = cs[i].substring(1);
                if(cs[i].indexOf('_iub_cs-s'+ siteId) == 0||cs[i].indexOf('_iub_cs-'+ cookiePolicyId) == 0) {
                    consentIsGiven = true;
                    break;
                }
            }
            window.consentIsGiven = consentIsGiven;
            return consentIsGiven;
}
</script>
<script type="text/javascript" src="http://mediamond.js.ad.dotandad.com/MediamondAds.js" language="javascript" id="mediamondBaseJS"></script>
<script type="text/javascript" language="javascript">
var mediamondAd=new MediamondAds();
mediamondAd.setTagPfx("page-prefix");
mediamondAd.setFifPath("/"); 
mediamondAd.setPositionsList("1o_u,sn_u,rn_u,rn_2,rn_3,rn_4,rn_5,rn_6,rn_7,rn_8,rn_9,rn_10,bp_1,bp_2,bp_3,bp_4,bp_5");
mediamondAd.setFunGen("fun-gen");
mediamondAd.setResponsiveSizes({"pixel":"x"});
try{mediamondAd.setKeywords("");}catch(e){}
if (typeof iubendaIsConsentGiven == 'function' && typeof _iub.csConfiguration !== "undefined") {
    	     var isConsentGiven  = iubendaIsConsentGiven(  _iub.csConfiguration.siteId,
                                                                                                       _iub.csConfiguration.cookiePolicyId);
	if (!isConsentGiven) mediamondAd.setDNT(-1);
}
mediamondAd.callAdserver();
</script>