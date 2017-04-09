'use strict'
$( document ).ready(function() {
	console.log( "Hello!" );
	//Change height of picture container to parent container
	if($('div.col.m4.robinCol')){
		var redHeight = $('div.row.footer').height();
		var brownHeight = $('div.col.m4.robinCol').height();
		$('div.col.m4.robinCol').css('height', redHeight );
		$("img.robinFoto2").show();
	};

	$('#clickMe').click(function() {
		let custom = $("#customAmount").val()
		$("#money5").val(custom)
		console.log($('#customAmount').val())
	});


// 	$('#myform').submit(function() {
// 		let custom = $("#customAmount").val()
// 		$("#money5").val(custom)	
// 		// $("#money5").val(12)
//     return true; // return false to cancel form action
// });
});
