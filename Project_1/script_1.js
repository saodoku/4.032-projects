/*
var canvas = document.getElementById("plot1");
//must reference width and height
canvas.width= document.getElementById("plot1").clientWidth;
canvas.height=document.getElementById("plot1").clientHeight;
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#884747";
ctx.fillRect(50,50,50,50);
*/

// find the canvas element by using id
var canvas1 = document.getElementById("plot1");

// get dimensions of canvas 1
canvas1.width = 2 * document.getElementById("plot1").clientWidth;
canvas1.height = 2 * document.getElementById("plot1").clientHeight;
var canvas1RealWidth = document.getElementById("plot1").clientWidth;
var canvas1RealHeight = document.getElementById("plot1").clientHeight;

// create a drawing object (getContext)
var ctx1 = canvas1.getContext("2d");

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

// SKETCH 1
// center of the plot will be the center of our clock
var centerX = canvas1.width / 2;
var centerY = canvas1.height / 2;
//translate the center of the clock to the center of the plot
ctx1.translate(centerX, centerY);

// Draw canvas 1
// in order to animate the clock we need to call the function in intervals
// in this case we will call it every second (1000 milliseconds)
ctx1.scale(2,2);
setInterval(drawCanvas1, 1000);

function drawCanvas1() {
    // outer radius of the clock
    var radius = 0.75 * (canvas1RealWidth/2);

    // start drawing
    ctx1.beginPath();

    // determine style of the form
    ctx1.strokeStyle = "#969696";
    ctx1.strokeWidth = 10;
    ctx1.fillStyle = "white"; // to paint over the previous drawing

    // 5 inputs: arc(x,y,radius,startAngle,endAngle)
    // to create circles the starting angle must be 0 and the end angle must be 2*Math.PI
    // b/c we've translated our canvas to the center; the center of the clock is 0,0
    ctx1.arc(0, 0, radius, 0, 2 * Math.PI);

    // stroke your drawing
    ctx1.stroke();
    ctx1.fill();
    
    //end drawing
    ctx1.closePath();

    // use numbers to show hour/minute
    drawNumMinutes(radius, centerX, centerY);
    
    function drawNumMinutes(radius, centerClockX, centerClockY) {
        var num;
        var ang;
        ctx1.font = radius*0.05 + "px avenir";
        ctx1.textBaseline="middle";
        ctx1.textAlign="center";
        ctx1.fillStyle = "#8b8989";
     
        for(num= 1; num < 61; num++){
            if (num%1 == 0){
                ang = num * Math.PI / 30;
                clocknum = num
                ctx1.rotate(ang);
                ctx1.translate(0, -radius*0.85);
                ctx1.moveTo(0, 0);
                ctx1.rotate(-ang);
                ctx1.fillText(clocknum.toString(), 0, 0);
                ctx1.rotate(ang);
                ctx1.translate(0, radius*0.85);
                ctx1.rotate(-ang);
                ctx1.restore();
            } 
        }
    }
    
    // get current date and timing
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getSeconds(); //made it getSeconds to show that it's moving
    var seconds = date.getSeconds();

    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minutes * Math.PI / (6 * 60)) + (seconds * Math.PI / (360 * 60));
    drawHand(hour, radius * 0.5, 8, "#000000");

    //minute1: go 5 mins before time
    minutes1 = ((minutes-0.5) * Math.PI / 30) + (seconds * Math.PI / (30 * 60));
    drawHand(minutes1, radius, 3, "#000000");
    
    //minute2: go 5 mins after time
    minutes2 = ((minutes+0.5) * Math.PI / 30) + (seconds * Math.PI / (30 * 60));
    drawHand(minutes2, radius, 3, "#000000");
    

    // the steps to draws the hands is the same for all of them
    // we can create a function, and then call it for each of the hands
    function drawHand(pos, length, width, color) {
        ctx1.beginPath();
        ctx1.lineWidth = width;
        ctx1.strokeStyle = color;
        ctx1.moveTo(0, 0);
        ctx1.rotate(pos);
        ctx1.lineTo(0, -length);
        ctx1.stroke();
        ctx1.rotate(-pos);
    }
    
    fillMinuteWedge();
    
    function fillMinuteWedge(){
        //var angIncrement = 6*Math.PI/180; 
        ctx1.beginPath();
        ctx1.strokeStyle = "#000000";
        ctx1.lineWidth = 1;
        ctx1.moveTo(0, 0);
        ctx1.rotate(minutes1);
        ctx1.lineTo(0, -radius);
        ctx1.stroke();
        ctx1.rotate(-minutes1);
        
        ctx1.rotate(minutes2);
        ctx1.lineTo(0, -radius);
        ctx1.stroke();
        
        ctx1.closePath();
        ctx1.fillStyle = "rgba(60, 60, 60, 0.25)";
        ctx1.fill();
    
        ctx1.rotate(-minutes2);
    }
    //center circle
    ctx1.beginPath();
    ctx1.fillStyle = "#a09d9d";
    ctx1.arc(0, 0, 10, 0, 2 * Math.PI);
    ctx1.fill();
    ctx1.closePath();

}

/*

    // start drawing
    ctx1.beginPath();

    // determine style of the form
    ctx1.strokeStyle = "#000000";
    ctx1.strokeWidth = 2;
    ctx1.fillStyle = "white"; // to paint over the previous drawing

    // arc() draws arcs
    // it needs 5 inputs arc(x,y,radius,startAngle,endAngle)
    // to create circles the starting angle must be 0 and the end angle must be 2*Math.PI
    // because we have translated our canvas to the center; the center of the clock is 0,0
    ctx1.arc(0, 0, radius, 0, 2 * Math.PI);

    // stroke your drawing
    ctx1.stroke();
    ctx1.fill();

    //end drawing
    ctx1.closePath();
    */
