$( document ).ready(function(){
  console.log("page loaded");
  var left_arrow = $('#left_arrow');
  var right_arrow = $('#right_arrow');

  const images = ['DSC00776.jpg', 'DSC00938.jpg', 'DSC00958.jpg', 'DSC01049.jpg'];

  
  initialize_image_position(images);

  left_arrow.on("click", function(){
    console.log("left arrow clicked");
  });


  right_arrow.on("click", function(){
    console.log("right arrow clicked");
  });

  var slide_interval = 3000; // 3sec
  var carousel_timer = window.setInterval(slide_left, slide_interval); // pause for a second while I debug the css layering issue

});

var initialize_image_position = function(images){
  var image_holder = $("#image_holder");
  for (var i in images){
    image_holder.append('<img src ="images/'+images[i]+'" class="image" id=' + i + '>');
    $('#'+i).css("left", i*800);
    console.log("appending "+ '<img src ="images/'+images[i]+'" class="image" id=' + i + '>');
  };

  // deciding between loading all images into a single div and jsut sliding the div
  // or adding a new DOM element for each image and then manipulating each at the same time
  // #1 seems better
  // add each image into the div containing images with float left?
  // move the position of the first image and the others should follow suit

};

var slide_left = function(){
  console.log("attempting to slide to the left...");
  $('#image_holder').animate({'left': '-=800px'}, 1000);
  console.log( $('.current_image').css('left'));
};

