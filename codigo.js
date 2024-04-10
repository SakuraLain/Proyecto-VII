$(document).ready(function() {

  $('#crearPresupuesto').click(function() {
    $('html').addClass('is-clipped');
    $('#modalCrear').addClass('is-active');
  });

  $('#cancelarPresupuesto, .modal-background, .modal-close').click(function() {
    $('html').removeClass('is-clipped');
    $('#modalCrear').removeClass('is-active');
  });

  $('#guardarPresupuesto').click(function() {
    let etiqueta = $('#etiquetaPresupuesto').val();
    let nombre = $('#nombrePresupuesto').val();
    let cantidad = $('#cantidadInicial').val();
    let fechaInicio = $('#fechaInicio').val();
    let fechaFin = $('#fechaFin').val();        
    let meta = $('#meta').val();

    switch (etiqueta) {
      case '1':
        $('#seccionAhorro').append(`<div class="box">Nombre de Presupuesto: ${nombre} <hr> Fecha de Inicio; ${fechaInicio} <hr> Fecha de Fin; ${fechaFin} <hr> Cantidad; <span class="cantidad">${cantidad}</span> <hr> Meta del Presupuesto; ${meta} <hr>
            <button class="borrar">Borrar</button>
            - <button class="agregar">Agregar al Presupuesto</button>
            - <button class="quitar">Quitar del Presupuesto</button>
            </div>`);
        break;
          case '2':
          $('#seccionVivienda').append(`<div class="box">Nombre de Presupuesto: ${nombre} <hr> Fecha de Inicio; ${fechaInicio} <hr> Fecha de Fin; ${fechaFin} <hr> Cantidad; <span class="cantidad">${cantidad}</span> <hr> Meta del Presupuesto; ${meta} <hr>
            <button class="borrar">Borrar</button>
            - <button class="agregar">Agregar al Presupuesto</button>
            - <button class="quitar">Quitar del Presupuesto</button>
            </div>`);
          break;
          case '3':
          $('#seccionManutencion').append(`<div class="box">Nombre de Presupuesto: ${nombre} <hr> Fecha de Inicio; ${fechaInicio} <hr> Fecha de Fin; ${fechaFin} <hr> Cantidad; <span class="cantidad">${cantidad}</span> <hr> Meta del Presupuesto; ${meta} <hr>
            <button class="borrar">Borrar</button>
            - <button class="agregar">Agregar al Presupuesto</button>
            - <button class="quitar">Quitar del Presupuesto</button>
            </div>`);
          break;
          case '4':
          $('#seccionBasicas').append(`<div class="box">Nombre de Presupuesto: ${nombre} <hr> Fecha de Inicio; ${fechaInicio} <hr> Fecha de Fin; ${fechaFin} <hr> Cantidad; <span class="cantidad">${cantidad}</span> <hr> Meta del Presupuesto; ${meta} <hr>
            <button class="borrar">Borrar</button>
            - <button class="agregar">Agregar al Presupuesto</button>
            - <button class="quitar">Quitar del Presupuesto</button>
            </div>`);
          break;
          case '5':
          $('#seccionOtros').append(`<div class="box">Nombre de Presupuesto: ${nombre} <hr> Fecha de Inicio; ${fechaInicio} <hr> Fecha de Fin; ${fechaFin} <hr> Cantidad; <span class="cantidad">${cantidad}</span> <hr> Meta del Presupuesto; ${meta} <hr>
            <button class="borrar">Borrar</button>
            - <button class="agregar">Agregar al Presupuesto</button>
            - <button class="quitar">Quitar del Presupuesto</button>
            </div>`);
          break;
}


$('html').removeClass('is-clipped');
  $('#modalCrear').removeClass('is-active');
});

// Event listener para abrir el modal de agregar al presupuesto
$('body').on('click', '.agregar', function() {
  $('html').addClass('is-clipped');
  $('#modalAgregar').addClass('is-active');
  // Guardamos una referencia al box que queremos agregarle cantidad
  window.boxToModify = $(this).closest('.box');
});

// Cerrar el modal de agregar al presupuesto
$('#cancelarAgregar, .modal-background, .modal-close').click(function() {
  $('html').removeClass('is-clipped');
  $('#modalAgregar').removeClass('is-active');
});

// Confirmar y agregar la cantidad al presupuesto
$('#confirmarAgregar').click(function() {
  let cantidadAgregada = parseFloat($('#cantidadAgregar').val());
  let cantidadActual = parseFloat(window.boxToModify.find('.cantidad').text());
  let cantidadTotal = cantidadActual + cantidadAgregada;
  window.boxToModify.find('.cantidad').text(cantidadTotal);

  $('html').removeClass('is-clipped');
  $('#modalAgregar').removeClass('is-active');
});

// Event listener para el botón "Borrar"
$('body').on('click', '.borrar', function() {
  $(this).closest('.box').remove();
});



// Event listener para abrir el modal de Quitar al presupuesto
$('body').on('click', '.quitar', function() {
  $('html').addClass('is-clipped');
  $('#modalQuitar').addClass('is-active');
  // Guardamos una referencia al box que queremos Quitarle cantidad
  window.boxToModify = $(this).closest('.box');
});

// Cerrar el modal de Quitar al presupuesto
$('#cancelarQuitar, .modal-background, .modal-close').click(function() {
  $('html').removeClass('is-clipped');
  $('#modalQuitar').removeClass('is-active');
});

// Confirmar y Quitar la cantidad al presupuesto
$('#confirmarQuitar').click(function() {
  let cantidadQuitarda = parseFloat($('#cantidadQuitar').val());
  let cantidadActual = parseFloat(window.boxToModify.find('.cantidad').text());
  let cantidadTotal = cantidadActual - cantidadQuitarda;
  window.boxToModify.find('.cantidad').text(cantidadTotal);

  $('html').removeClass('is-clipped');
  $('#modalQuitar').removeClass('is-active');
});

});