/* Alertas - sale mensaje por pantalla a modo de pop-up
alert("Hola mundo!!!");
*/

//Variables
var nombre = "Christian Giménez";
var altura = 189;
var concatenacion = nombre + " " + altura;

/* Para escribir en el HTML podemos usar document.write, pero es mejor hacerlo por GetElementById
document.write(concatenacion);
*/

//a la variable datos le asignamos el espacio correspondiente al id del html datos
var datos = document.getElementById("datos");

/*a la variable datos le añadimos el valor de concatenacion,
  eliminando lo que hubiese dentro del HTML de datos y asignandole en su lugar
  el valor que haya dentro de concatenacion
datos.innerHTML = concatenacion;
*/

/*Tambien podemos en vez de llamar a concatenacion, hacer un template string
  usando las comillas al reves `` y poniendo ahí el código html
  llamando a su vez al valor de las variables ${variable} */
datos.innerHTML += `
    <h1>Soy la caja de datos<h1>
    <h2>Me llamo: ${nombre}<h2>
    <h3>Mido: ${altura} cm<h3>
`;

//CONDICIONAL IF
/*Podemos hacer un condicional: Si la altura es menor o igual a 190 -> mostramos "Eres una persona ALTA" */
if (altura >= 190) {
    //Usamos el operador += para que el innerHTML no se cepille lo anterior y lo AÑADA
    datos.innerHTML += "<h1>Eres una persona ALTA<h1>"; //Si lo escribimos en linea, el html puede ir con comillas "" ''
} else { //Si mides < 190 entonces mostramos "Eres una persona BAJITA"
    datos.innerHTML += "<h2>Eres una persona BAJITA<h2>";
}

var year = document.getElementById("year");

//BUCLE FOR
//(variable inicializadora; condicion para el bucle; incrementador del valor de la variable)
for (var i = 2018; i <= 2022; i++) {
    //se ejecuta un bloque de instrucciones hasta que la condicion del bucle sea falsa i != <= 2022
    //Escribimos en el div con id year el valor "Estamos en el año " + el valor que tenga i en cada iteración del bucle
    year.innerHTML += "<h3>Estamos en el año: " + i + "</h3>";
}

//FUNCIONES
//Creamos la variable con function seguido de nombreVariable(){ instrucciones }
function muestraMiNombre(nombre, altura) {
    //Una vez asignamos a datosDos el espacio html del div con ID "datos2"
    var datosDos = document.getElementById("datos2");
    datosDos.innerHTML += `
        <h2>Soy la 2ª Caja de datos</h2>
        <p>Estos datos los mostramos con una función<p>
        <h3>Mi nombre es ${nombre}</h3>
        <h4>Mi altura es: ${altura} cm</h4> 
    `;
}

//llamamos a la funcion y le pasamos los parametros
muestraMiNombre("Son Goku", 175);


//RETORNAR valor de una Funcion a otra Funcion para imprimirlo
function muestraMiNombreDos(nombre, altura){
    var misDatos = `
        <h3>Soy la 3ª Caja de datos</h3>
        <p>Estos datos los imprimimos pasando la funcion muestraMiNombreDos( ) por la funcion de imprimir( )</p>
        <h4>Mi nombre es ${nombre}</h3>
        <h5>Mi altura es: ${altura}</h5>
    `;

    //Devolvemos el valor dado en las instrucciones de la funcion a la variable misDatos
    return misDatos; 
}

function imprimir(){
    var datosTres = document.getElementById("datos3");
    datosTres.innerHTML = muestraMiNombreDos("Principe Vegeta", 164);
}

imprimir();

//ARRAYS
//asignamos a la variable nombres los datos del array
var nombres = ["Javi", "Ivan", "Wolfy", "Christian"];
// índices    [   0,      1,      2,      3]

/*Mostramos el índice 1 del array nombres en una alerta
alert(nombres[1]); muestra Ivan*/

document.write("<hr/><h1>Listado de nombres:</h1><ol>");
//Recorremos todo el array nombres y los mostramos todos con el bucle For
//asignamos 0 a i, mientras que i < a la longitud del array 0, añadimos +1 a i
for(var i = 0; i < nombres.length; i++) {
    document.write("<li>" + nombres[i] + "</li>"); //escribimos en el html el valor actual de i, el cual variará según el índice en cada iteración
}
document.write("</ol>");

//Ejemplo con ejemplo de funcion de callback
//creamos el array skills
var skills = ["Kamehameha", "Galick Ho", "Makankosappo"];

//separamos elementos en el html
document.write("<hr/><h1>Listado de habilidades:</h1><ul>");

/*FUNCION CALLBACK - una funcion que se pasa a otra funcion como argumento,
  para luego invocarse dentro de la funcion externa para completar
  alguna rutina/accion*/

//Funcion Callback manera 1
skills.forEach(function(skills){ //pasamos a la funcion callback una funcion anonima con el argumento del array skills
    document.write("<li>" + skills + "</li>");
});

document.write("<br/>");

//Funcion Callback manera 2, definiendolo con una flecha =>
skills.forEach((skills) => {
    document.write("<li>" + skills + "</li>");
});




