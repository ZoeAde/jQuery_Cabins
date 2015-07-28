$(document).ready(function() {
	console.log("The document is ready!");


  $('.image-container').append('<article class="home" data-price="1000000000"><img src="http://www.lehmannmansion.com/uploads/O2/aR/O2aRtzGaHZgBzexcG2uTMg/Leh_Front_Exterior-1.jpg" /><h4>$1 MILLION</h4></article>');

  $('.image-container').append('<article class="home" data-price="50000"><img src="http://www.lehmannmansion.com/uploads/Xa/Q_/XaQ_TOycqXjLg8qlOVF32w/Lehmann_Mansion_web.jpg" /><h4>$50,000</h4></article>');

  $('.image-container').append('<article class="home" data-price="30000"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Rundown_Shack.jpg/1280px-Rundown_Shack.jpg" /><h4>$30,000</h4></article>');

  $('img').css({'height': '150px', 'width': '150px'});

  $('.light').on('click', function(){
    $('body').css('background-image', 'url(img/tileable_wood_texture.png)');
  });

  $('.dark').on('click', function(){
    $('body').css('background-image', 'url(img/dark_wood.png)');
  });

  $('.textures').append('<span class="forest"></span>');

  $('.forest').on('click', function(){
    $('body').css({'background-image': 'url(img/forest.jpg)', 'background-size':'cover'});
  });

  $('.forest').css("background-image", 'url(img/forest.jpg)');

  $('.textures').css("width", "150px");

  // $('.low').on("click", function(){

  // });

var homeArray = $('.home');




// function sort(array) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if (parseInt(array[i].dataset.price) < parseInt(array[i + 1].dataset.price)) {
//       console.log(parseInt(array[i + 1].dataset.price));
//       newArray.push(array[i]);
//     }
//     else {
//       console.log(parseInt(array[i].dataset.price));
//       newArray.push(array[i+1]);
//     }
//   }
//   return newArray;
// }






});
