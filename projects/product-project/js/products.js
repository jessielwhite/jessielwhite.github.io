/* global $ _ opspark */
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  
  function printProducts(data) {
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
  }
  
  $.getJSON('data/product.json', function(data){
      $('<section>').attr('id', 'section-products').append($('<h3>').text('Products')).appendTo($('main'));
        
      $('#section-products').append($('<ul>').attr('id', 'list-products'));
        
      // print out initial product listing
      printProducts(data);
      
      let searchData = [];
      
      $('#search-button').click(function(e) {
        let searchKeywords = $('#search-input').val().split(" ");
        _.each(data, function(product) {
          let descriptionKeywords = _.map(product.desc.split(" "), function(word) {
            return word.toLowerCase();
          });
          searchKeywords.forEach(function(keyWord) {
            if (!searchData.includes(product)) {
               if (descriptionKeywords.includes(keyWord.toLowerCase())) {
                  searchData.push(product);   
              }
            }
           
          });
        });
        
        $('#list-products li').remove();
        printProducts(searchData);
        $('#search-input').val("");
      });
      
      $('#view-all').click(function(e) {
        searchData = [];
        $('#list-products li').remove();
        printProducts(data);
      });
      
      $('#phone-filter').click(function(e) {
       searchData = _.filter(data, function(product) {
          return product.type === 'phone';
        });
        $('#list-products li').remove();
        printProducts(searchData);
        
      });
      
      $('#case-filter').click(function(e) {
       searchData = _.filter(data, function(product) {
          return product.type === 'case';
        });
        $('#list-products li').remove();
        printProducts(searchData);
        
      });
      
      $('#lowest').click(function(e) {
        $('#list-products li').remove();
        if (searchData.length > 0) {
          printProducts(searchData.sort(function (a, b) {
            return a.price - b.price;
          }));
        }
        else {
          printProducts(data.sort(function (a, b) {
            return a.price - b.price;
          }));
        }
      });
      
      $('#highest').click(function(e) {
        $('#list-products li').remove();
        if (searchData.length > 0) {
          printProducts(searchData.sort(function (a, b) {
            return a.price - b.price;
          }).reverse());
        }
        else {
          printProducts(data.sort(function (a, b) {
            return a.price - b.price;
          }).reverse());
        }
      });
      
      
      
    });
  // ALL YOUR CODE GOES ABOVE HERE //
});