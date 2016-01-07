$( document ).ready(function(){
  console.log("page loaded");

  var slide_interval = 2000; // 2sec
  var carousel_timer = window.setInterval(slide_left, slide_interval);

});

var slide_left = function(){
  console.log("attempting to slide to the left...");
  $('.current_image').animate({'left': '-=801px'});
  console.log( $('.current_image').css('left'));
};