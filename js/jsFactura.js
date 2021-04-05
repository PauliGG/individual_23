// Autor: Paulina Gomez
// Version: Version1
// Obj.Archivo: validar formulario de factura

$(document).ready(function () {

	$("#formularioFactura").validate({
		rules: {
			facturaID: {
				required: true,
				number: true,
				max: 9999,
				min: 1,
				
				 
			},

			ventaID: {
				required: true,
				number: true,
				max: 999,
				min: 1,
				
			},

			facturaFechaG: {
				required: true, 
			},

			facturaFechaPago: {
				required: true
			},

			facturaSubtotal: {
				required: true,
			},

			facturaImpuesto: {
				required: true, 
			},

			facturaTotal: {
				required: true,
			}
		},

		messages: {

			facturaID: {
				required: "Obligatorio",
				number: "Por favor ingrese solo números.",
				min: "Ingrese un valor mayor o igual que {0}",
				max: "Ingrese un valor menor o igual que {0}",
				
				
				 
			},

			ventaID: {
				required: "Obligatorio",
				number: "Por favor ingrese solo números.",
				min: "Ingrese un valor mayor o igual que {0}",
				max: "Ingrese un valor menor o igual que {0}",
				
			},

			facturaFechaG: {
				required: "Obligatorio",
			},

			facturaFechaPago: {
				required: "Obligatorio",
			},

			facturaSubtotal: {
				required: "Obligatorio",
				number: "Por favor ingrese un número valido."
			},

			facturaImpuesto: {
				required: "Obligatorio",
				number: "Por favor ingrese un número valido."
			},

			facturaTotal: {
				required: "Obligatorio",
				number: "Por favor ingrese un número valido."
			}
 
		}
	});


	$( "#facturaFechaG" ).datepicker({

		changeMonth: true ,
		changeYear: true,
		dateFormat:"dd/mm/yy"
		 
	});

	$( "#facturaFechaPago" ).datepicker({
		changeMonth: true ,
		changeYear: true,
		dateFormat:"dd/mm/yy"
	});

});

