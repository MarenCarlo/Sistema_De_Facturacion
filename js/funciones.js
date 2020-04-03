//FUNCION SELECCIONAR ELEMENTOS DE LA LISTA
$(function() {     
    var elementos = $(".lista li"); // elementos de la lista
    elementos.click(function() {// cuando se haga click sobre alguno de estos elementos
       elementos.removeClass("active"); // se elimina active de todos los elementos     
       $(this).addClass("active");//activamos el elemento clicado.

       //mostrar detalles
       var ide = $(this).find('.idcontacto').text();

       /*var data = {idcontacto:ide};

        $.post("obtenerdetalles", data, function (res, est, jqXHR) {
            $(".detalles").html(data);
        });*/
    });
  
  });

  //FUNCION BUSCAR CONTACTOS
  /*
  function buscar() {
    var filtro = $("#txtBuscar").val();
    $.ajax({
        url: "buscar.do",
        data: {
            filtro: filtro
        },
        success: function (result) {
            $("#resultado").html(result);
        }
    });
}



$('.btnguardar').click(function (e) {
    e.preventDefault();
        var data = $('#frmcontacto').serialize();
        $.post("crearproducto", data, function (res, est, jqXHR) {
            alert(res);
        });
});

*/

function ObtenerLista(){
  $.get("Lista", function(data){
    $(".lista").html(data);
  });
}
ObtenerLista();

///boton agregar otro numero
$(document).ready(function(){

    $("#telefono1").keyup(function(){
        var numero = $("#telefono1");
        var botonoculto = $(".mostrarnumero2");
        if(numero.val().length < 8){
            numero.css("background-color", "pink");
        }else{
            numero.css("background-color", "white");
            botonoculto.css("display", "block");
        }
    });

    $(".mostrarnumero2").click(function () {    
        $('.segundo').css("display", "inline-flex");
        $(this).css("display", "none");
    });
});