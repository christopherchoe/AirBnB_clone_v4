let amenities = {};
console.log('hi susan before our dom load');
$(() => {
  console.log('hi susan');
  $('INPUT').each(function (index) {
    if index.is(':checked')) {
      console.log('checked');
      amenities[index.attr('data-name')] = index.attr('data-id');
    } else {
      console.log('not checked');
      if (amenities[index.attr('data-name')]) {
        delete amenities[index.attr('data-name')]
      }
    }
  }
  console.log(amenities);
});
