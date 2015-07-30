function isConsentGiven (siteId,cookiePolicyId){
        var cs = document.cookie.split(';');
	for (var i = 0; i < cs.length; i++) {
		while (cs[i].charAt(0) == ' ') cs[i] = cs[i].substring(1);
		if(cs[i].indexOf('_iub_cs-s'+ siteId) == 0||cs[i].indexOf('_iub_cs-'+ cookiePolicyId) == 0) return true;}
	return false;
}
