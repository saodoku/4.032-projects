// array of data
var data = [{year:2004, fruit:309}, {year: 2005, fruit:295}, {year: 2006, fruit: 294}, {year:2007, fruit: 303}, {year: 2008, fruit: 310}, {year: 2009, fruit: }];

//TODO plot 1 bar chart
//margins, width and height
var marginal = {t:5, r:25, b:20, l:25};

//append svg
var plot = d3.select("#plot1")
            .append("svg")
            .attr("width", width + margin1.r + margin1.l)
            .attr("height", height + margin1.t + margin1.t)
            
var 
            
// scales to position our bars
// and to give them height
// d3 scales are translation of values into other values
// more information at https://github.com/d3/d3-scale

// 1 map (get an array) all the years in the original array
var mapYears = data.map(function(d){return d.year});

// scaleX
var scaleX = d3.scaleBand().domain(mapYears).range([0,width]);

console.log(2005, scaleX(2005));

// 2 get the minimum and maximum values
var maxFruit = d3.max(data, function(d){return d.fruit});

console.log(maxFruit);

// scaleY
var scaleYPlot1 = d3.scaleLinear().domain([0,maxFruit]).domain([height,0]);

//create groups to put the content inside them
plot1.append("g").attr("transform", "translate("+margin1.l + "," + (margin1.t) + ")").attr("class", "axis axis-y");

plot1.append("g").attr("transform", "translate("+margin1.l + "," + (margin1.t+ height) + ")").attr("class", "axis axis-x");

plot1.append("g").attr("transform", "translate("+margin1.l + "," + (margin1.t+ height) + ")").attr("class", "axis axis-x");
                                           
//AXIS
var axisBarChartX = d3.axisBottom().scale(scaleXPlot1).ticks(),
    axisBarChartY = d3.axisLEft().scale(scaleYPlot1).tickSizeInner(-width).tickPadding([5]).ticks(3);

plot1.select


/* Helpful commands:
d3.select
look at tips from Michael Bolack
*/

//bars



///TODO plot 2

//plot bar chart
//margins, width and height


//append svg




// parse data with d3.csv



//function draw

    // 1 map (get an array) all the years in the original array


    // scaleX


    // 2 get the minimum and maximum values


    //scaleY


    //functions to create the lines

    //create groups to put the content inside them


    //AXIS



    // fruits





    // veggies










