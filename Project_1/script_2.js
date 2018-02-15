// find the canvas2 element by using id
var canvas2 = d3.select("#plot2").append("canvas").node();
var widthCanvas2 = d3.select("#plot2").node().clientWidth;
var heightCanvas2 = d3.select("#plot2").node().clientHeight;

// get dimensions of canvas
canvas2.width = 2 * widthCanvas2;
canvas2.height = 2 * heightCanvas2;


// create a drawing object (getContext)
var ctx2 = canvas2.getContext("2d");

// code to request the reload of the window --> we will use this to create animations
var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

window.cancelRequestAnimFrame = (function () {
    return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
})();

// variables to control the format of the date and time
var formatHour = d3.timeFormat("%I:%M");
var format24Hour = d3.timeFormat("%H");
var format24Minute = d3.timeFormat("%M");


// variables
var radius = 50;
var topFloor = heightCanvas2/2;

// functions to control colors and positions
//var scaleColorFloor = d3.scaleLinear().domain([0,(6*60),(8*60),(17*60),(18*60),(24*60)]).range(["#292f4d","#a96a7f","#aece20","#aece20","#292f4d","#292f4d"]);

//function getRandomArbitrary(min, max) {
  //  return Math.random() * (max - min) + min;
//}

// animation variables
var t = 120;
var speed = 1; // 1 minute

// SKETCH
ctx2.scale(2,2);

// draw canvas2
// in order to animate we need to call the function in intervals
function drawcanvas2() {
    // convert t into a date
    var thisTime = numberToTime(t);

    //re-start the canvas (otherwise it will paint over the previous image)
    // start drawing

    //SKY
    //ctx.rect(x,y,width,height);
    ctx2.beginPath();
    ctx2.fillStyle = "#884747"; //color of the sky
    ctx2.rect(0,0,widthCanvas2,heightCanvas2);
    ctx2.fill();
    ctx2.closePath();

    //FLOOR (12 parts)
    // determine the form
    
    growRect();
    function growRect(){
        ctx2.beginPath();
        ctx2.fillStyle = "#568847"; //change the color of the floor depending on the time
        ctx2.rect(0,topFloor,widthCanvas2,-t);
        ctx2.fill();
        ctx2.closePath();
    }
    
    
  
    // time
    ctx2.beginPath();
    ctx2.fillStyle = "#FFF";
    ctx2.font = "100 80px Helvetica Neue LT Std";
    ctx2.textAlign = "center";
    ctx2.fillText(thisTime,widthCanvas2/2,heightCanvas2/4);
    ctx2.closePath();
    
    if (t >= (24*60)){
        t = 0
    }else {
        t = t + speed; // sum the minute to the previous time
        
    requestAnimationFrame(drawcanvas2);
    }

}

drawcanvas2()


function numberToTime (d) {
    var hours   = Math.floor(d / 60);
    var minutes = Math.floor(d - (hours * 60));

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    return hours+':'+minutes;
}

