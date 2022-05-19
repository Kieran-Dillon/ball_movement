//Global variable that would contain the position, velocity and the html element "ball"
var velocity = 100;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById('ball');
var reverse = false;


//Function that can change the position of the html element "ball"
function moveBall() {
// two fixed x-axis coordinates
  var Xmin = 0;
  var Xmax = 300;

  var Ymin = 0;
  var Ymax = 300;

  if (!reverse){
    positionX = positionX + velocity;
  } else positionX = positionX - velocity;

  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';

  if (positionX >= Xmax){
    reverse = true;
  } else if (positionX === Xmin){
    reverse = !reverse;
  }
  
  //console.log("position: " + positionX);
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
