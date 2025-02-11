'use strict';

/*Creación de un objeto*/
let o1 = {};
/*Creación de una función, usando una expresión*/
let f1 = function () {};
/*Creación de una función usando el constructor de la clase*/
//let f2 = new fuction(parametro1,parametro2...,código)


/*Llamada a la función. El número de parámetros puede ser superior o inferior al número de argumentos.Fíjate que la llamada es antes que la declaración de la función*/
decirNombre();
decirNombre("Pepe");
decirNombre("Pepe", "María");


/*Declaración de funciones en JS*/
function decirNombre(nombre)
{
	console.log("Hola " + nombre)
}

/*Retorno de valores*/
function calcularPrecioTotal(precioUnitario,unidades)
{
	return precioUnitario * unidades
}
let total = calcularPrecioTotal(5,6);
console.log(total);

/*Parámetros de la funciones:
valor por defecto a los parámetros*/
function asignarNombre(nombre)
{
	let nom = nombre || "Anónimo"
	console.log(nom)
}
asignarNombre("Pepe")
asignarNombre()

/*Otra forma de hacerlo es asignando un valor en la llamada, disponible desde la ES2015*/
function asignarNombre2(nombre = "Anónimo")
{
	let nom = nombre;
	console.log("Nombre con valor en el paso de parámetros: " + nom)
}
asignarNombre2("María");
asignarNombre2();

/*Funciones se pueden comportar en parte como objetos*/
function Persona(nombre)
{
	this.nombre = nombre;
	nombre = "Bea";

	console.log("Te llamas " + nombre + " o te llamas " + this.nombre)
}
let p = new Persona("Jose");

function Persona2()
{
	this.decirAdiós = function(){console.log("Hasta Luego")}
}
let a = new Persona2();
a.decirAdiós();


/*Funciones anónimas*/
let total2 =function(precioUnitario,unidades)
{
	return precioUnitario * unidades;
}
console.log(total2)
console.log(total2(5,6) + 1)


/*Funciones lambda. (param1,param2,param3,...) => {sentencios}*/
	//Con una sola expresión se pueden omitir las llaves
let suma = (num1,num2) => num1 + num2;
console.log("Suma: "  + suma(8,7))
	//Si solo hay un parámetro no hace falta paréntesis
let cuadrado = num => num*num;
console.log("Cuadrado: " + cuadrado(3))
	//Si hay más de una sentencia son necesarias las {} y el return
let sumarInteres = (precio,porcentaje)=>
{
	let interes = precio*porcentaje/100;
	return precio + interes;
}
console.log("Precio final: ", sumarInteres(100,20));

	//Rest y spread para funciones
function getNotas(nombre,...notas)
{
	console.log("Las notas de " + nombre + " son " + notas)
}
getNotas("Juan",3);
getNotas("Silvia",3,10);
getNotas("María",3,9,8,10,11,-1);
getNotas();
