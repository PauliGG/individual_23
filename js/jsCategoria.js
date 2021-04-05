// Autor: Paulina Gomez
// Version: Version1
// Obj.Archivo: mostrar las categorias

$(document).ready(function () {


    $("#tituloCategoria").resizable();


    $("#acordeonCategoria").accordion();

    $("#Abrir").on("click", function () {
        $("#dialog").dialog("open");
    });

    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "drop",
          duration: 1000
        }
      });

});