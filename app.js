$(document).ready(function() {
	console.log("The document is ready!");

//New Homes
  $('.image-container').append('<article class="home" data-price="1000000000"><img src="http://www.lehmannmansion.com/uploads/O2/aR/O2aRtzGaHZgBzexcG2uTMg/Leh_Front_Exterior-1.jpg" /><h4>$1 MILLION</h4></article>');

  $('.image-container').append('<article class="home" data-price="50000"><img src="http://www.lehmannmansion.com/uploads/Xa/Q_/XaQ_TOycqXjLg8qlOVF32w/Lehmann_Mansion_web.jpg" /><h4>$50,000</h4></article>');

  $('.image-container').append('<article class="home" data-price="30000"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Rundown_Shack.jpg/1280px-Rundown_Shack.jpg" /><h4>$30,000</h4></article>');
//Changing Light to Dark
  $('img').css({'height': '150px', 'width': '150px'});

  $('.light').on('click', function(){
    $('body').css('background-image', 'url(img/tileable_wood_texture.png)');
  });

  $('.dark').on('click', function(){
    $('body').css('background-image', 'url(img/dark_wood.png)');
  });

//Forest Background
  $('.textures').append('<span class="forest"></span>');

  $('.forest').on('click', function(){
    $('body').css({'background-image': 'url(img/forest.jpg)', 'background-size':'cover'});
  });

  $('.forest').css("background-image", 'url(img/forest.jpg)');

  $('.textures').css("width", "150px");

//Low to High Sort
var homeArray = $('.home').slice();
var lowBtn = $('.low');
var homePlacement = $('.image-container');
var lowHigh = homeArray.sort(lowToHigh);

function lowToHigh(a, b) {
  var aHome = parseInt(a.dataset.price);
  var bHome = parseInt(b.dataset.price);

    if (aHome > bHome) {
      return 1;
    }
    else if (bHome > aHome) {
        return -1;
    }
    else {
        return 0;
    }
}

lowBtn.on("click", function(){
  homePlacement.html(lowHigh);
});

//High to Low Sort
var homeArray2 = $('.home').slice();
var highBtn = $('.high');
var highLow = homeArray2.sort(highToLow);

function highToLow(a,b) {
  var aHome = parseInt(a.dataset.price);
  var bHome = parseInt(b.dataset.price);

    if (aHome < bHome) {
      return 1;
    }
    else if (bHome < aHome) {
        return -1;
    }
    else {
        return 0;
    }
}

highBtn.on("click", function(){
  homePlacement.html(highLow);
});

//











});

