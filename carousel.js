$( document ).ready(function(){
  console.log("page loaded");
  const images = ['DSC00776.jpg', 'DSC00938.jpg', 'DSC00958.jpg', 'DSC01049.jpg'];

  initialize_image_position(images);
  initialize_listeners();
  current_image_id = 0;
  num_images = images.length;

  slide_interval = 3000; // 3sec
  //var carousel_timer = window.setInterval(slide_left, slide_interval); // pause for a second while I debug the css layering issue
  carousel_timer = window.setInterval(carousel_loop, slide_interval); 
});

var initialize_listeners = function(){

  $('#left_arrow').on("click", function(){
    console.log("left arrow clicked");
    current_image_id = index_cleanser(current_image_id-1);
    manual_move(current_image_id);
  });

  $('#right_arrow').on("click", function(){
    console.log("right arrow clicked");
    current_image_id = index_cleanser(current_image_id+1);
    manual_move(current_image_id);
  });

  // initialize jumpers here
};

var initialize_image_position = function(images){
  var image_holder = $("#image_holder");
  for (var i in images){
    image_holder.append('<img src ="images/'+images[i]+'" class="image" id=' + i + '>');
    $('#'+i).css("left", i*800);
    console.log("appending "+ '<img src ="images/'+images[i]+'" class="image" id=' + i + '>');
  };
};

var slide_to_image_n = function(n){
  var left_position = (-800*n)+"px";
  console.log("attempting to slide to "+left_position);
  $('#image_holder').animate({'left': left_position}, 1000);
};

var index_cleanser = function(desired_image_index){
  if (desired_image_index < 0){
    return (num_images - 1);
  } else if (desired_image_index >= num_images ){
    return 0;
  } else {
    return desired_image_index;
  };
};

var manual_move = function(n){
  clearInterval(carousel_timer);
  n = index_cleanser(n);
  slide_to_image_n(n);
  carousel_timer = window.setInterval(carousel_loop, slide_interval); 
};

var carousel_loop = function(){
  current_image_id = index_cleanser(current_image_id+1);
  console.log("updating next_image_id as "+current_image_id);
  slide_to_image_n(current_image_id);
};
