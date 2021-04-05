$(document).ready(function () {

    $('#listadoVentas').DataTable({
        //searching: false,   //Desactiva el buscador
        //paging: false
         

        "pageLength": 3,   //Muestra cantidad de registros por pagina

        //"columnDefs": [
        //    { "width": "10%", "targets": 0 },
        //    { "width": "10%", "targets": 1 },
        //    { "width": "10%", "targets": 2 },
        //    { "width": "10%", "targets": 3 }
        //],

        //"lengthChange": false,  //Desactiva la capacidad del usuario para cambiar el número de registros por página
        
        "lengthMenu": [ 3, 5, 8, 10, 20 ],
         

        "language": {

            "lengthMenu":     "Mostrar _MENU_ registros",
            "search":         "Buscar registro :",

            "info": "Mostrando  _PAGE_ de _PAGES_ páginas",

            

            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "anterior"
            },
        },

        responsive: true

    });

     

});