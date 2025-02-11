'use strict';

console.log("Hola mundo"); //Imprimir una cadena de caracteres
console.log("Hola mundo.", "Curso 2022");
console.log("Hola mundo. Curso " +  2021 +1);//Veremos que si un operando es de tipo cadena, el operador + concatena
console.log("Hola mundo. Curso", 2021 + 1); //Si los operandos son de tipo numérico, la operación que se realizará es la de suma
console.log("%cHola mundo", "color: red; font-size: 20pt;"); //Puedo aplicar algunos estilos usando %c
let curso = 2022;
console.log(`Hola mundo ${curso}`); //Puedo usar variables dentro de la cadena, delimitando esta con la tilde invertida, que serán sustituidas por orden por los valores que vengan detrás de las ,
console.log("Hola, %s. Tienes %d años.", "Bob", 40);//Puedo utilizar también sustituciones de cadena como %s o %d.
