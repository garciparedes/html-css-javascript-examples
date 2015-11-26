var dataRoute = "data/"
var JSONFileName = "data.json"
var CSVFileName = "data.csv"

function d3BarChartExample(){

    //
    // Definimos el valor que le queremos dar
    // a los margenes.
    //
    // Definimos el valor que tendran
    // el ancho y alto del grafico.
    //
    // Tambien el color de las barras del grafico
    //
    var margin = {
        top: 50,
        right: 20,
        bottom: 30,
        left:40
    }

    var w = 640 - margin.left - margin.right;
    var h = 480 - margin.top - margin.bottom;

    var color = d3.scale.category10();



    //
    // Definimos x e y, que seran las funciones
    // encargadas de reescalar los valores que introduzcamos
    // en el grafico para que "encajen" dentro de las
    // dimensiones predefinidas para el grafico.
    //
    // En el caso de la x se utiliza ordinal por que nuestra variable
    // va a ser categorica ( el nombre de la fruta)
    // En el caso de la y sin embargo utilizaremos linear porque
    // utilizaremos valores numericos, es decir, el precio.
    //
    var x = d3.scale.ordinal()
        .rangeRoundBands([0,w], .1);

    var y = d3.scale.linear()
        .range([h, 0]);



    //
    // Definimos los ejes x e y
    // Cada uno se reescala a partir de la funcion correspondiente
    // definida en las lineas superiores y a la vez se orientan según
    // corresponde.
    //
    // Tambien vamos a incluid un grid en el eje de las y.
    //
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var yGrid = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
        .tickSize(-w,0,0)
        .tickFormat("");



    //
    // Definimos el objecto svg en la el cuerpo de la web.
    // Ademas le asignamos el ancho y el alto.
    // Tambien le agregamos un grupo y "transfomamos" el eje
    // de origen (en svg arriba a la izquierda por defecto) en
    // abajo a la izquierda para simplificar la colocacion de los
    // valores del grafico.
    //
    var svg = d3.select("body").append("svg")
        .attr("width", w + margin.left + margin.right)
        .attr("height", h + margin.top + margin.bottom)
        .append("g")
        .attr("transform"
            , "translate("+ margin.left +", " + margin.top + ")"
        );



    //
    // Leemos los datos del fichero json donde estan alojados
    // para despues poder incorporarlos a nuestro grafico.
    // Lo que hacemos con el codigo "+d.Precio" es convertir
    // los valores a numeros (en el caso de que en el navegador
    // donde se ejecute este codigo no se detecte como numeros),
    // es decir, hacemos un "casting"
    //
    // Seguidamente asignamos el dominio de los ejes x e y a partir
    // del maximo valor que contengan nuestros datos en el caso de la y
    // y el numero de elementos que hay en el caso de la x. Tambien
    // incluimos un grid en el eje y.
    //
    // Tambien incluimos unos labels de titulo y escala en el eje y.
    //
    // Por ultimo generamos las barras del diagrama de barras
    //
    d3.csv(dataRoute + CSVFileName, function(error, data) {


        data.forEach(function(d) {
            d.Precio = +d.Precio;
        });


        x.domain(data.map(function(d){
            return d.Fruta
        }));

        y.domain([0, d3.max(data, function(d){
            return d.Precio;
        })]);



        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, " + h + ")")
            .call(xAxis);

        svg.append("g")
            .attr("clas", "y axis")
            .call(yAxis);

        svg.append("g")
            .attr("class", "grid")
            .call(yGrid);



        var labels = svg.append("g")
            .attr("class", "labels");

        labels.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Precio (€)");


        var title = svg.append("g")
            .attr("class", "title");

        title.append("text")
            .attr("x", (w / 2))
            .attr("y", -30 )
            .attr("text-anchor", "middle")
            .style("font-size", "22px")
            .text("My first bar chart");



        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.Fruta); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.Precio);})
            .attr("height", function(d) { return h - y(d.Precio);})
            .attr("fill", function(d ){ return color(d.Fruta);});
     });
}
