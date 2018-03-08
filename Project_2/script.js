//plots6
// var url = 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083'

d3.json("data/boston_weather.json",draw);

function draw(error,data){
    var currWeather = data.currently;
    //drawing 1 parts
    var tempdiv = document.getElementById("tempsection");
    var humiditydiv = document.getElementById("humiditysection");
    //WRITTEN SECTION FOR PART 2
    var txtdiv = document.getElementById("txtsection");
    txtdiv.style.fontSize = "20px";
    txtdiv.style.fontFamily = "Fira Sans";
    
    //drawing 2 moving part (temp circles)
    var tempcirc = document.getElementById("tempcircles");
    var objpos = tempcirc.style;
    objpos.position = 'absolute';
    //width of temp
    var widthcirc = (tempcirc.clientWidth)/3;
    
    //for 1st drawing
    var tempimg = document.createElement("img");
    var humidimg = document.createElement("img");
    
    var temp = currWeather.temperature;
    var humidity = currWeather.humidity *100;
    var windSpeed = currWeather.windSpeed;
    
    //for 2nd drawing
    var summary1 = document.createElement("H2")
    var sum1 = document.createTextNode("Summary");
    summary1.appendChild(sum1);
    var summary2 = document.createTextNode("Temperature: "+ temp+ '\xB0');
    var summary3 = document.createTextNode("Humidity: "+humidity+ "%");
    var summary4 = document.createTextNode("Wind Speed: "+ windSpeed+ "mph");
    
    var humidityType = "";
    var tempType = "";
    
    
    // TOP (humidity)       
    if (humidity < 45) {
    humidityType = "lowhumid";
    humiditydiv.style.backgroundColor = "rgba(51, 102, 136, 0.2)";     
    }
    
    else if (humidity>=45 && humidity<=65){
    humidityType = "medhumid";
    humiditydiv.style.backgroundColor = "rgba(51, 102, 136, 0.59)";
         if (temp < 45) {
        //left 1, down 1 
        tempcirc.transform = "translate("+ 0 +"," +-widthcirc+")";
        }
        //left 1
        else if (temp>= 45 && temp<75){
        tempcirc.transform = "translate("+ 0 +"," + 0+")";
        }
        //left 1, up 1
        else{
        tempcirc.transform = "translate("+ 0 +"," + widthcirc+")";
        } 
    }   
    else{
    humidityType = "highhumid";
    humiditydiv.style.backgroundColor = "#336688";
    //right 1
    tempcirc.transform = "translate("+ 1 +"," + 0+")";
        if (temp < 45) {
        //left 1, down 1 
        tempcirc.transform = "translate("+ 0 +"," +-widthcirc+")";
        }
        //left 1
        else if (temp>= 45 && temp<75){
        tempcirc.transform = "translate("+ 0 +"," + 0+")";
        }
        //left 1, up 1
        else{
        tempcirc.transform = "translate("+ 0 +"," + widthcirc+")";
        } 
    }
    
    // BOTTOM (temp)
    if (temp < 45) {
    tempType = "cold";
    tempdiv.style.backgroundColor = "hsl(204, 45%, 37%)";
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
    
    // console.log(humidimg.src);
    humidimg.src = "./images1/" + humidityType + ".png";
    tempimg.src = "./images1/" + tempType + ".png";
    
    //console.log(humidimg);
    //console.log(tempimg);
    txtdiv.style.backgroundColor = "rgba(149, 149, 149, 0.5)"; 
    
    humiditydiv.appendChild(humidimg);
    tempdiv.appendChild(tempimg);
    
    txtdiv.appendChild(summary1);
    txtdiv.appendChild(document.createElement("br"));
    txtdiv.appendChild(summary2);
    txtdiv.appendChild(document.createElement("br"));
    txtdiv.appendChild(summary3);
    txtdiv.appendChild(document.createElement("br"));
    txtdiv.appendChild(summary4);
    
    txtdiv.appendChild(humidity);
    txtdiv.appendChild(windSpeed);
    
    }
    