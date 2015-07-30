$(document).ready(function() {
	console.log("The document is ready!");

//New Homes
  $('.image-container').append('<article class="home" data-price="1000000000"><img src="http://www.lehmannmansion.com/uploads/O2/aR/O2aRtzGaHZgBzexcG2uTMg/Leh_Front_Exterior-1.jpg" /><h4>$1,000,000</h4></article>');

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
var homeArray = $('.home');
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

lowBtn.on("click", function(event){
  event.preventDefault();
  homePlacement.html(lowHigh);
});

//High to Low Sort
var homeArray2 = $('.home');
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

highBtn.on("click", function(event){
  event.preventDefault();
  homePlacement.html(highLow);
});

//Price Range Buttons - IN PROGRESS
// var homeArray3 = $('.home');
// var labels = $('label');

// $(labels[0]).on("click", function(){
//   for (var i = 0; i < homeArray3.length; i++) {

//     var homeValue = parseInt(homeArray3[i].dataset.price);
//     var tempHome = homeArray3[i];

//     if (50000 >= homeValue) {
//       $(tempHome).show();
//       }
//     else {$(tempHome).hide();
//     }
//   }
// });

// var homeArray4 = $('.home');
// var labels1 = $('label');

// $(labels1[1]).on("click", function(){
//   for (var i = 0; i < homeArray4.length; i++) {

//     var homeValue1 = parseInt(homeArray4[i].dataset.price);
//     var tempHome = homeArray4[i];

//     if (50000 <= homeValue1 <= 100000) {
//       $(tempHome).show();
//       }
//     else {$(tempHome).hide();
//     }
//   }
// });








});
