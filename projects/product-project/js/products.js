/* global $ */
/* global _ */
$(document).ready(function() {
	// ALL YOUR CODE GOES BELOW HERE //
  
  $.getJSON('data/product.json', function(data){
      
       function printProducts(data) {
            data.map(function(product) {
              var $listItem = $('<li>').addClass('product row');
              var $imgWrapper = $('<div>').addClass('col-sm-4');
              var $image = $imgWrapper.append($('<img>').attr('src', "img/product/thumbs/" + product.image));
              var $descWrapper = $('<div>').addClass('col-sm-8');
              var $desc = $('<div>').text(product.desc).addClass('description');
              var $type = $('<div>').text(product.type).addClass('type');
              var $price = $('<div>').text(product.price).addClass('price');
              var $color = $('<div>').text(product.color).addClass('color');
              var $allColors = $('<div>').text(product.allColors).addClass('AllColors');
              var $specs = $('<div>').text(product.specs).addClass('specs');
              var $stock = $('<div>').text(product.stock).addClass('stock');
              $descWrapper.append($desc, $type, $price, $color, $allColors, $specs, $stock);
              $listItem.append($imgWrapper, $descWrapper);
              $('#list-products').append($listItem);
            });
        }
      
      // create a section #section-products, add an h3 to it, and append it to main
      $('<section>').attr('id', 'section-products').append($('<h3>').text('Products')).appendTo($('main'));
      // add #list-products ul to the section
      $('#section-products').append($('<ul>').attr('id', 'list-products'));
      
      var types = data.reduce(function(seed, val){
          if (!seed.includes(val.type)){
              seed.push(val.type);
          }
          return seed;
      }, []);
      
      types.forEach(function(type){
        $('.dropdown-menu').append($('<li>').text(type).addClass(type));
      });
      
        
      // prints out initial product listing
      printProducts(data);
      
      var searchData = [];
      
      $('#search').click(function(e) {
        searchData = [];
        var searchKeywords = $('#query').val().split(" ");
        _.each(data, function(product) {
          var descriptionKeywords = _.map(product.desc.split(" "), function(word) {
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
      
      // looks for type, finds its immediate child (dropdown-menu), finds its immediate child (li)
      
    $('#type > .dropdown-menu > li').click(function(e) {
        searchData = _.filter(data, function(product) {
            return product.type === e.currentTarget.className;
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
      
      $('.product').click(function(e){
        $('#myModal .modal-body').html($(e.currentTarget));
        $('#myModal').modal('show');
      });
      // $('modal-body').append($(this.val())
    });
	// ALL YOUR CODE GOES ABOVE HERE //
});
