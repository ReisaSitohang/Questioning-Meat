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

	if($('div.wrapper')){
		var gewenst = $('div.wrapper').height();
		$('div#fotoBox').css('height', gewenst );
		$("img.robintje").show();
	};
		$('#NameDon').click(function() { 	//When clicking on the donate button
			let custom1 = $("#customAmount").val() //Check input value
			$("#money5").val(custom1) //Change value to user input
			// $("#hiddenNameButton").trigger("click")//Submit name php
			setTimeout(function() {
		 		$("input#Don").trigger("click")//Submit the form with the value
			}, 10);
	})
});
