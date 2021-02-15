$(function () {
  // Serve API content for places_search
  let myDict = {};
  $.ajax({type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: JSON.stringify(myDict),
    success: function (result) {
      for (let x in result) {
        let structure = [
          '<article>',
          '<div class="title_box">',
          '<h2>' + result[x].name + '</h2>',
          '<div class="price_by_night">' + '$' + result[x].price_by_night + '</div>',
          '</div>',
          '<div class="information">',
          '<div class="max_guest">',
          '<i class="fa fa-users fa-3x" aria-hidden="true"></i>',
          '<br />',
          result[x].max_guest + "guests",
          '</div>',
          '<div class="number_rooms">',
          '<i class="fa fa-bed fa-3x" aria-hidden="true"></i>',
          '<br />',
          result[x].number_rooms + "Bedrooms",
          '</div>',
          '<div class="number_bathrooms">',
          '<i class="fa fa-bath fa-3x" aria-hidden="true"></i>',
          '<br />',
          result[x].number_bathrooms + "Bathrooms",
          '</div>',
          '</div>',
          '<div class="Description">',
          result[x].description,
          '</div>',
          '</article>'
        ];
        $(structure.join('')).appendTo("section.places");
      }
    },
    dataType: 'json',
    contentType: 'application/json'
  });
const $ = window.$;
window.addEventListener("DOMContentLoaded", function (event) {
  const dict = {};
  $("input[type=checkbox]").change(function () {
    if (this.checked) {
      dict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete dict[$(this).attr('data-id')];
    }
    $('.amenities h4').html(Object.values(dict).join(', ') || '&nbsp;');
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
