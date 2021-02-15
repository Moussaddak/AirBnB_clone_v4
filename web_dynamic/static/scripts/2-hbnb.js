$(document).ready(function () {
  const Amenities = {};
  $('.amenities input').change(function () {
    if (this.checked) { Amenities[$(this).attr('data-id')] = $(this).attr('data-name'); } else { delete Amenities[$(this).attr('data-id')]; }
    $('.amenities h4').text(Object.values(Amenities).join(', '));
  });
});
$.get('http://0.0.0.0:5001/api/v1/status/')
  .done(function (response) {
    if (response.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  })
  .fail(function (response) {
    $('#api_status').removeClass('available');
  });
