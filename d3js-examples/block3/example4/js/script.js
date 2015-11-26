var dataRoute = "data/"
var JSONFileName = "data.json"

function d3BarChartExample(){

    // Definimos el valor que le queremos dar
    // a los margenes.
    var margin = {
        top: 50,
        right: 20,
        bottom: 30,
        left:40
    }
    // Definimos el valor que tendran
    // el ancho y alto del grafico.
    var w = 500 - margin.left - margin.right;
    var h = 350 - margin.top - margin.bottom;

    // Tambien el color de las barras del grafico
    var color = d3.scale.category10();


    //Definimos x e y, que seran las funciones
    // encargadas de reescalar los valores que introduzcamos
    // en el grafico para que "encajen" dentro de las
    // dimensiones predefinidas para el grafico.
    //
    // En el caso de la x se utiliza ordinal por que nuestra variable
    // va a ser categorica ( el nombre de la fruta)
    // En el caso de la y sin embargo utilizaremos linear porque
    // utilizaremos valores numericos, es decir, el precio.
    var x = d3.scale.ordinal()
        .rangeRoundBands([0,w], .1);

    var y = d3.scale.linear()
        .range([h,0]);



    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
    }
