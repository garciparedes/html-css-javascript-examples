
var dataRoute = "data/"

function d3Examples(){
    var CSVFileName = "data.csv"
    var JSONFileName = "data.json"

    //readCSV(CSVFileName);

    readJSON(JSONFileName);
    readJSONObject(JSONFileName);
}


function readCSV(fileName){
    d3.csv(dataRoute + fileName, function(data) {
        console.log(data);
    });
}

function readJSONObject(fileName){
    d3.json(dataRoute + fileName, function(data) {
        console.log(data);
    });
}

function readJSON(fileName){
    d3.json(dataRoute + fileName, function(data) {

        var frutas = data.frutas;

        for(i = 0; i < frutas.length; i++){
            console.log(frutas[i].Fruta
                + ": "
                + frutas[i].Precio
            );
        }
    });
}
