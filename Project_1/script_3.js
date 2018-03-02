var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  requestAnimationFrame(drawcanvas3);
}

var canvas3 = document.getElementById("plot3");

    // get dimensions of canvas 3
    canvas3.width = 2 * document.getElementById("plot3").clientWidth;
    canvas3.height = 2 * document.getElementById("plot3").clientHeight;
    var canvas3RealWidth = document.getElementById("plot3").clientWidth;
    var canvas3RealHeight = document.getElementById("plot3").clientHeight;

    // create a drawing object (getContext)
    var ctx3 = canvas3.getContext("2d");

function drawcanvas3() {
  ctx3.globalCompositeOperation = 'destination-over';
  ctx3.clearRect(0, 0, 300, 300); // clear canvas

  ctx3.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx3.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx3.save();
  ctx3.translate(150, 150);

  // Earth
  var time = new Date();
  ctx3.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx3.translate(105, 0);
  ctx3.fillRect(0, -12, 50, 24); // Shadow
  ctx3.drawImage(earth, -12, -12);

  // Moon
  ctx3.save();
  ctx3.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx3.translate(0, 28.5);
  ctx3.drawImage(moon, -3.5, -3.5);
  ctx3.restore();

  ctx3.restore();
  
  ctx3.beginPath();
  ctx3.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx3.stroke();
 
  ctx3.drawImage(sun, 0, 0, 300, 300);
}

init()
