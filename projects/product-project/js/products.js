/* global $ _ opspark */
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('data/product.json', function(data){
      $('<section>').attr('id', 'section-products').append($('<h3>').text('Products')).appendTo($('main'));
        
      $('#section-products').append($('<ul>').attr('id', 'list-products'));
        
      data.map(function(phone) {
        var $listItem = $('<li>').addClass('phone row');
        var $imgWrapper = $('<div>').addClass('col-sm-4');
        var $image = $imgWrapper.append($('<img>').attr('src', "img/product/thumbs/" + phone.image));
        var $descWrapper = $('<div>').addClass('col-sm-8');
        var $desc = $('<div>').text(phone.desc).addClass('description');
        var $type = $('<div>').text(phone.type).addClass('type');
        var $price = $('<div>').text(phone.price).addClass('price');
        var $color = $('<div>').text(phone.color).addClass('color');
        var $allColors = $('<div>').text(phone.allColors).addClass('AllColors');
        var $specs = $('<div>').text(phone.specs).addClass('specs');
        var $stock = $('<div>').text(phone.stock).addClass('stock');
        $descWrapper.append($desc, $type, $price, $color, $allColors, $specs, $stock);
        $listItem.append($imgWrapper, $descWrapper);
        $('#list-products').append($listItem);
      });
    });
  // ALL YOUR CODE GOES ABOVE HERE //
});