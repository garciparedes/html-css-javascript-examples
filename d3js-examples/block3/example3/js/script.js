function d3AxisExample(){
var datos = [5, 10, 15, 20, 25, 110, 12, 34, 54];

var w = 360; // Ahora es el ancho del dibujo
var h = 420; // Ahora es el alto del dibujo

var margin_x = 60;
var margin_y = 60;


var x = d3.scale.linear()
    .domain([0, datos.length])
    .range([0,w]); // Ajuste eje X

var y = d3.scale.linear()
    .domain([0, d3.max(datos)])
    .range([h,0]); // Ajuste eje Y


// Defino la función eje X
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom")
    .ticks(5);

// Defino la función eje Y
var yAxis = d3.svg.axis().scale(y)
    .orient("left")
    .ticks(5);


// Elementos svg
var svg = d3.select("body").append("svg")
    .attr("width", w + margin_x + margin_x)
    .attr("height", h + margin_y + margin_y).append("g")
    .attr("transform", "translate(" + margin_x + "," + margin_y + ")");


// Eje X
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + h + ")")
    .call(xAxis);

// Eje Y
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

}
