// Autor: Paulina Gomez
// Version: Version1
// Obj.Archivo: mostrar detalles de la venta

$(document).ready(function () {
	//div1
	$("#agregar").on("click", function () {

		var idV = $('#idVenta').val();
		var producto = $('#producto').val();
		var cantidad = $('#cantidad').val();
		 
		if (idV == "" || producto == "" || cantidad == "") {
			alert("Error: Hay datos vacios");
		} else {

			if (cantidad < 1 || cantidad > 1000) {
				alert("Error: Cantidad fuera de rango min.1 - max.1000");
			} else {

				$('#tituloDetalle').text(`Detalle de Venta`);

				$('#idVenta').attr('disabled', 'disabled');
				var buscar = $('#contenedorDetalle').text().indexOf(producto);

				if (buscar >= 0) {
					alert("Error: Producto ya agregado")
				} else {
					$('#contenedorDetalle').append(`<li><strong>id_Venta:</strong> ${idV} | <strong>Producto:</strong> ${producto} | <strong>Cantidad:</strong> ${cantidad} </li>`);
				}
			}
		}
	});

});

