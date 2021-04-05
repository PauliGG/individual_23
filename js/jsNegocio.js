$(document).ready(function () {
	//div1
	$("#div11").on( "click", function() {
		$('#div1').hide("slow"); //oculto mediante id	 
	});
	
	//div2
	$("#div22").on( "click", function() {
		$('#div2').hide("slow"); //oculto mediante id	 
	});
 
	//div3
	$("#div33").on( "click", function() {
		$('#div3').hide("slow"); //oculto mediante id 
	});
	
	//div4
	$("#div4").on( "click", function() {
		$('#div4').hide("slow"); //oculto mediante id	 
	});
	 
	//Boton
	 $("#desplegar").on( "click", function() {
		$('#div1').show("slow"); //muestro mediante id
		$('#div2').show("slow"); //muestro mediante id
		$('#div3').show("slow"); //muestro mediante id
		$('#div4').show("slow"); //muestro mediante id
	 });

 

});