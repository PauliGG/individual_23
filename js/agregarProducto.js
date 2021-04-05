// Autor: Paulina Gomez
// Version: Version1
// Obj.Archivo: agregar productos


$(document).ready(function () {
	
	$("#agregarProducto").click(function (){    // Dos formas de usarlo
		//$("#agregar").click(function (){  
		//$("#formularioProducto").on("submit",function () { 
		
		var contador = 0 ;

		menorMayor($('#idProducto'), 0, 10000);

		minMax($('#nombreProducto'), 0, 51);

		menorMayor($('#valorProducto'), 0, 1000000);

		vacio($('#categoria'));

		if(contador==0){   //Validacion si no hay errorres 
			alert("Datos enviados");
			return true;   //Si se envia el formulario
		}else{
			
			return false;   //No se envia el formulario
		}

		function vacio(idValor){   //Validacion si no es vacio

			if (idValor.val()!="") {
				estiloValidar(idValor, 1);   //Funcion para el estilo del css - True
			} else {
				estiloValidar(idValor, 0);   //Funcion para el estilo del css - False
				contador= contador + 1 ;   //Contador de errores
			}
		}

		function menorMayor(idValor, menor, mayor) {   //Validacion de numero menor y mayor - RegEx /[.,]/ decimal con "," o "."  

			if (idValor.val() > menor && idValor.val() < mayor  && !(/[.,]/.test(idValor.val())) ==true   ) {
				estiloValidar(idValor, 1);   //Funcion para el estilo del css - True
			} else {
				estiloValidar(idValor, 0);   //Funcion para el estilo del css - False
				contador= contador + 1 ;   //Contador de errores
			}
		}

		function minMax(idValor, min, max) {   //Validacion de caracteres con un minimo y maximo

			if (idValor.val().length > min && idValor.val().length < max) {
				estiloValidar(idValor, 1);   //Funcion para el estilo del css - True
			} else {
				estiloValidar(idValor, 0);   //Funcion para el estilo del css - False
				contador= contador + 1 ;   //Contador de errores
			}
		}

		function estiloValidar(idValor, valor) {   //Seleccion de color de fondo,borde y estilo para formularios

			switch (valor) {
				case 1:   //Por defecto vuelve a normal - True
					idValor.css({ "backgroundColor": '' });
					idValor.css({ "borderColor": '', "border-style": '' });
					break;
				default:   //Fondo amarillo, borde rojo y estilo punteado - False
					idValor.css({ "backgroundColor": 'yellow' });
					idValor.css({ "borderColor": 'red', "border-style": 'dashed' });
			}
		}
	});

});

