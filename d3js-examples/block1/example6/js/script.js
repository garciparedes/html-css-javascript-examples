var animales = [
    {
        nombre: "Perro",
        patas: 4,
        edad: 5,
        sano: true
    },
    {
        nombre: "Gato",
        patas: 4,
        edad: 3,
        sano: false
    },
    {
        nombre: "Loro",
        patas: 2,
        edad: 1,
        sano: true
    }
];

function readArray(){
    //alert("Hola " + perro.nombre);
    for(var i = 0; i < animales.length; i++){
        console.log(animales[i].nombre + "\n");
    }
}
