$( document ).ready(function() {

  $('.collapse').collapse({
    toggle: false
  });

  $('.carousel').carousel({
    interval: 7000
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
});