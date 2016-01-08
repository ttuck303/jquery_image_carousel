$( document ).ready(function(){
  console.log("page loaded");
  const images = ['DSC00776.jpg', 'DSC00938.jpg', 'DSC00958.jpg', 'DSC01049.jpg'];


  current_image_id = 0;
  num_images = images.length;

  initialize_image_position(images);
  initialize_listeners(num_images);

  slide_interval = 3000; // 3sec
  carousel_timer = window.setInterval(carousel_loop, slide_interval); 
});

var initialize_listeners = function(num_images){

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

  var jumper_container_width = (num_images * 37); // this is hard coded to be the width of a single jumper div with margins, TODO make it dynamic
  var jumper_container = $('#jumper_container');
  jumper_container.css({
      "width": (jumper_container_width+"px"), 
      "left": ((800-(jumper_container_width))/2)+"px"
    });
  for (var x = 0; x < num_images; x++){
    jumper_container.append("<div class='jumper' id='jumper"+x+"'></div>");
  };
  set_active_jumper(0);

  var numberPattern = /\d+/g;
  $('.jumper').on("click", function(){
    var id = $( this ).attr('id').match( numberPattern );
    console.log("Setting current image id to " + id);
    current_image_id = Number(id);
    console.log("actual current image id is " + current_image_id);
    manual_move(id);
  });
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
  $('#image_holder').animate({'left': left_position}, 1000, set_active_jumper(n));
};

var set_active_jumper = function(n){
  $('.jumper').removeClass('active');
  $('#jumper'+n).addClass('active');
};

var index_cleanser = function(desired_image_index){
  console.log("index_cleanser input is "+desired_image_index);
  if (desired_image_index < 0){
    console.log("index_cleanser output is "+num_images - 1);
    return (num_images - 1);
  } else if (desired_image_index >= num_images ){
    console.log("index_cleanser output is "+0);
    return 0;
  } else {
    console.log("index_cleanser output is "+desired_image_index);
    return desired_image_index;
  };
};

var manual_move = function(n){
  clearInterval(carousel_timer);
  n = index_cleanser(n);
  console.log("manually moving to "+ n);
  slide_to_image_n(n);
  carousel_timer = window.setInterval(carousel_loop, slide_interval); 
};

var carousel_loop = function(){
  console.log("input into carousel loop is "+ current_image_id);
  current_image_id = index_cleanser(current_image_id+1);
  console.log("after cleansing, the current image id is "+current_image_id);
  console.log("automatically moving to"+current_image_id);
  slide_to_image_n(current_image_id);
};
