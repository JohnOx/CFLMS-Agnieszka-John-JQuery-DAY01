// $("form").submit(function(e) {
// 	e.preventDefault();

	
// });

$(document).ready(function(){
	

	for (i=0; i<5; i++) {
		var newDiv = $('<div></div>');
	$('article').append(newDiv);
	$(newDiv).addClass('box').text("BOX");
	$("#msg").val("Search for");
	$("[href]").text("www.codefactory.wien");
};



});