//plots6
// var url = 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083'

d3.json("data/boston_weather.json", draw);

function draw(error,data){
    var currWeather = data.currently;
    
    //READING DATA
    var temp = currWeather.temperature;
    document.getElementById("temper").innerHTML = temp;
    var humidity = currWeather.humidity *100; 
    document.getElementById("hum").innerHTML = humidity;
    var windSpeed = currWeather.windSpeed;
    document.getElementById("win").innerHTML = windSpeed;
    
    //DRAWING 1 PARTS (divs)
    var tempdiv = document.getElementById("tempsection");
    var humiditydiv = document.getElementById("humiditysection");
    
    //DRAWING 1 IMAGES
    var tempimg = document.createElement("img");
    var humidimg = document.createElement("img"); 

    //USED TO DETERMINE IMAGE USED--DRAWING 1
    var humidityType = "";
    var tempType = "";

    //DASHBOARD 1
    function dash1(){
        // TOP (humidity)
        if (humidity < 45) {
        humidityType = "lowhumid";
        humiditydiv.style.backgroundColor = "rgba(51, 102, 136, 0.2)";     
        }
        else if (humidity>=45 && humidity<=65){
        humidityType = "medhumid";
        humiditydiv.style.backgroundColor = "rgba(51, 102, 136, 0.59)";
        }   
        else{
        humidityType = "highhumid";
        humiditydiv.style.backgroundColor = "#336688";
        }
        
        // BOTTOM (temp)
        if (temp < 45) {
        tempType = "cold";
        tempdiv.style.backgroundColor = "hsl(204, 4%, 37%)";
        // instead of background color, use trnasform
        }
        else if (temp>= 45 && temp<75){
        tempType = "avg";
        tempdiv.style.backgroundColor = "#FFCC00"; 
        }
        else{
        tempType = "hot";
        tempdiv.style.backgroundColor = "#FF9900";
        } 
        
        // set up img you will use    
        humidimg.src = "./images1/" + humidityType + ".png";
        tempimg.src = "./images1/" + tempType + ".png";

        humiditydiv.appendChild(humidimg);
        tempdiv.appendChild(tempimg);
        }
    dash1();
    
    //DASHBOARD 2
    
    //drawing 2 divs (default)
    humcircdiv = document.getElementById("hum1");
    tempcircdiv = document.getElementById("temp1");
        
    //drawing 2 moving part (temp circles)
    var tempcirc = document.createElement('img');
    tempcirc.src = "images1/temp.png";
    var humcirc = document.createElement('img');
    humcirc.src = "images1/humidity.png";
    
    tempcircdiv.appendChild(tempcirc);
    humcircdiv.appendChild(humcirc);
    
    function dash2(){
        //CONDITIONS FOR HUMIDITY
        function set_hum(){
        if (humidity < 35) {
        humcircdiv.setAttribute("id", "hum1");
        }
        else if (humidity>=35 && humidity<50){
        humcircdiv.setAttribute("id", "hum2");
        }   
        else if (humidity>=50 && humidity<60){
        humcircdiv.setAttribute("id", "hum3");
        } 
        else if (humidity>=60 && humidity<=75){
        humcircdiv.setAttribute("id", "hum4");
        } 
        else{
        humcircdiv.setAttribute("id", "hum5");
        }
        }

    if (temp < 35) {   
    tempcircdiv.setAttribute("id", "temp1");    
    set_hum();}

    else if (temp>= 35 && temp<50){   
    tempcircdiv.setAttribute("id", "temp2");    
    set_hum();}
        
    else if (temp>= 50 && temp<65){    
    tempcircdiv.setAttribute("id", "temp3");
    set_hum();}
    
    else if (temp>= 65 && temp<80){     
    tempcircdiv.setAttribute("id", "temp4");
    set_hum();}
        
    else{
    tempcircdiv.setAttribute("id", "temp5");
    set_hum();
    }
   
    }
    dash2();
    
    console.log(data);
    }
draw()
   
// NOTES FROM OH WITH IRENE: 
//can do d3.select("name").html(variable) can help you prevent creating elt in js IE:
// <p>temperature:<span id=tempValue></span>/p>
// Keyboard: "Command" + "/" allows you to comment out a whole block of code
    
