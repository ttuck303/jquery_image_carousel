# jquery_image_carousel

jquery animate changes css properties
css position the image relative to a fixed window div (left x pixels)
trigger every 5 seconds OR on click of arrow OR on click of little button
use clip property (css) to make sure images are the correct size

need to adjust z index or opacity somehow to make sure that only the active image is showing -> answer is to use overflow: hidden; !!!!


need to create a counter so that once the slides reach the end, they can reset to the starting position
may need to store the images in an array or something to easily loop over them and adjust depending on how many images are in play



get into the details of how the slider should actually work

say you have N images in your images folder
for now, just going to put their file names in an array

So, you have an array of N images


if arrow button is pressed
  slide in the direction of the button
else if dot (jumper we'll call it because you can 'jump' to an image)
  scroll to corresponding image
else (if no action is taken)
  if the last image is the current image
    reset slider action (slide to image 0 action)
  else
    slide left every 5 seconds
end
reset the timer (any time a picture is moved, manually or automatically, the timer should reset)
(but really, the timer is already running if the the images are moved automatically, so it should only be on manual moves, although it might be cleaner to jsut reset at the end of every loop)

Image css is messed up because all the images are on top of each other. 
  Can't do float and absolute positioning at the same time. 
  Can't do clip without absolute positioning (I believe). 
I guess positionin each image individually wouldn't be that hard with jquery. Seems like the dumb way but I am blanking on other ways right now, so it goes. 