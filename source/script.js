$(document).ready(function() { 
	
	$("#l_nws").remove();
	$("li.feed").remove();

	var url_elems = location.pathname.match(/\/feed.*/);
	//var home_url = $("#myprofile").attr("href");

	if (url_elems) {
		window.location.replace('/im');
	}
});