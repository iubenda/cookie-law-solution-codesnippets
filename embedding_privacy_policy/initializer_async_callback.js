function startIubendaBadge() {
	/** After dynamic content... **/

	var loadIubendaBadge = function() {
  	  var s = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
  	  s.src = "https://cdn.iubenda.com/iubenda.js";
  	  tag.parentNode.insertBefore(s, tag);
	};

	var aLink = $('<a href="https://www.iubenda.com/privacy-policy/Xxxxxx" class="iubenda-black iubenda-embed" title="Privacy Policy ">Privacy Policy</a>');
	$('#element-id-containing-badge').append(aLink);
	loadIubendaBadge();
};
