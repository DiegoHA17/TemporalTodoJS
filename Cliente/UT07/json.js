
function jsonToJS ()
{
    const estructuraJson =
        '{ '
        +
        '"título":"Manual de UFOlogía",        '
        +
        '"nserie":"187C2",     '
        +
        '"autores":["Pedro Martínez","Ana León"],     '
        +
        '"editorial":{'
        +
        '"nombre":"Inexistente S.A.",   '
        +
        '"pais":"España"'
        +
        '},'
        +
        '"edicion" : 2,'
        +
        '"ensayo" : true'
        +
        '}';
    alert(estructuraJson);
    console.log(estructuraJson);
    console.log("----------------------------------------------")
    const obj = JSON.parse(estructuraJson);
    console.log(obj.titulo);
    console.log(obj.autores);
    console.log(obj.editorial.nombre);
    console.log(obj.editorial.pais);
    console.log(obj.edicion);
    console.log(obj.ensayo);
}


function JsToJson()
{
    const musico1 =
        {
            nombre: "Bob",
            apellido: "Dylan",
            fechaNacimiento:
                {
                    dia: 24,
                    mes: 5,
                    año: 1941
                },
            discos: ['HighWay 61 revisited', 'Blonde on Blonde', 'Self Portrait']
        }
    console.log(JSON.stringify(musico1, 'false', 3));
    // False para que se incluyan todos los elementos
    // 3 o culquiero otro numero, es la cantidad de tabulaciones
}

window.onload = function() {
    document.getElementById("ejemploJson").addEventListener("click", jsonToJS);
    document.getElementById("JsToJson").addEventListener("click", JsToJson);
    
};
