/*

Clases para agilizar este proceso (plantillas)

*/

// 1.- Definir clase con la palabra reservada class

class minino {

    // 2.- Definir propiedades o atributos
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";

    // 3.- Definir los métodos que serán definidos como funciones o acciones
    maullar(){
        console.log("Miau");
    }

    dormir(){
        console.log("Zzzzzzz");
    }

    ronronear(){
        console.log("Prrrrrrrr");
    }

    // 4.- Agregar constructores
    // Necesito construir con los atributos ya definidos en la clase
    constructor(nombre, edad, raza, caracter){ // funcion especial para construir donde necesito esos parametros
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter = caracter;

    }
}

// 5.- Para empezar a crear o instanciar objetos, vamos a utilizar la palabra reservada new

var garfield = new minino("Garfield", 9, "Persa", "Dormilón");
var felix = new minino("Felix", 4, "Cartoon", "amistoso");
var helloKitty = new minino("Hello Kitty", 2, "Kawaii", "Fresita");
var salem = new minino("Salem", 40, "Darks", "Cómico");
var donGato = new minino("Don Gato", 30, "Cartoon", "Raro");
var benito = new minino("Benito", 1, "Cartoon", "Curioso");
var luna = new minino("Luna", 2, "Darks", "Amigable");

var gatitos = [garfield, felix, helloKitty, salem, donGato, benito, luna];
var botonGatitos = document.querySelector("#gatitos");
var contenedorGatitos = document.querySelector("#contenedor");

botonGatitos.addEventListener("click", traerGatitos);
var i = 0;

function traerGatitos(){
    if (i < 7){
     let gatito = gatitos[i];
     let nombre = document.createElement("h2");
     let edad = document.createElement("h3");
     let raza = document.createElement("h3");
     let caracter = document.createElement("h3");
     let separador = document.createElement("hr");

     nombre.innerHTML = gatito.nombre;
     edad.innerHTML = "Edad: " + gatito.edad;
     raza.innerHTML = "Raza: " + gatito.raza;
     caracter.innerHTML = "Caracter: " + gatito.caracter;

     contenedorGatitos.appendChild(nombre);
     contenedorGatitos.appendChild(edad);
     contenedorGatitos.appendChild(raza);
     contenedorGatitos.appendChild(caracter);
     contenedorGatitos.appendChild(separador);
     i++;
    }else{
        alert("Ya no hay más gatitos para mostrar.");
    }
}