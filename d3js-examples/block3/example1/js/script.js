
var dataRoute = "data/"
var JSONFileName = "data.json"




function d3Examples(){
    readJSON(JSONFileName);
}


function readJSONObject(fileName){
    d3.json(dataRoute + fileName, function(data) {
        console.log(data);
    });
}

function readJSON(fileName){
    d3.json(dataRoute + fileName, function(data) {

        var frutas = data.frutas;
        var frutasdata = new Array();

        for(i = 0; i < frutas.length; i++){
            frutasdata.push(frutas[i].Precio);

        }
        console.log(frutasdata);

        var width = 100,
            barHeight = 30;

        var x = d3.scale.linear()
            .domain([0, d3.max(frutasdata)])
            .rangeRound([0, width]);


        var chart = d3.select(".chart")
            .attr("width", width)
            .attr("height", barHeight * frutasdata.length);

        var bar = chart.selectAll("g")
            .data(frutasdata)
            .enter().append("g")
            .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

        bar.append("rect")
            .attr("width", x)
            .attr("height", barHeight - 1);


    });
}
