$(document).ready(function () {
  const Amenities = {};
  $('.amenities input').change(function () {
    if (this.checked) { Amenities[$(this).attr('data-id')] = $(this).attr('data-name'); } else { delete Amenities[$(this).attr('data-id')]; }
    $('.amenities h4').text(Object.values(Amenities).join(', '));
  });
});
