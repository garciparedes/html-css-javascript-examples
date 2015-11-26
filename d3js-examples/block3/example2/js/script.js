function d3AxisExample(){
    
var datos = [5,10,15,20,25];

var svg = d3.select("body").append("svg");

var w = 400;
var h = 300;

var margin_x = 32;
var margin_y = 20;

svg.attr("width", w).attr("height", h); //Fijo tamaño alemento SVG

var y = d3.scale.linear()
    .domain([0, d3.max(datos)])
    .range([0 + margin_y, h - margin_y]); // Ajuste eje Y

var x = d3.scale.linear()
    .domain([0, datos.length])
    .range([0 + margin_x, w - margin_x]); // Ajuste eje X

var g = svg.append("svg:g")
    .attr("transform", "translate(0," + h + ")"); // Grupo svg

g.append("svg:line")
    .attr("x1", x(0))
    .attr("y1", -y(0))
    .attr("x2", x(datos.length))
    .attr("y2", -y(0))
    .attr("stroke","black");

g.append("svg:line")
    .attr("x1", x(0))
    .attr("y1", -y(0))
    .attr("x2", x(0))
    .attr("y2", -y(d3.max(datos))-10)
    .attr("stroke","black");
}
