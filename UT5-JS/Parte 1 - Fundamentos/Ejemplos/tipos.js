'use strict';

/*Las variables contienen valores de un tipo. La variable cogerá el tipo del primer valor asignado. Para ver el tipo de datos usaremos la instrucción typeof*/
let variable1 = 5.15171819;
console.log("Tipo variable 1 " + typeof variable1)
let variable2 = 5;
console.log("Tipo variable 2 " + typeof variable2)
let variable3 = "hola";
console.log("Tipo variable 3 " + typeof variable3)
let variable4 = true;
console.log("Tipo variable 4 " + typeof variable4)
/*Tipo de datos dinámico*/
variable4 = 5;
console.log("Tipo variable 4 " + typeof variable4)
let variable7 = [1,2,3,4,5]
console.log("Tipo variable 7 " + typeof variable7)
console.log(variable7.prototype)
console.log("¿Es un Array? " +  variable7 Array) //variable7.isArray()


/*Tipo numérico: el tipo de datos es number. Tenemos disponibles una serie de propiedades y métodos*/
console.log(variable1.toFixed(2))
console.log(3.148920.toFixed(2))
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

/*Tipo cadena: el tipo de datos String se delimita por comillas. Tenemos disponibles una serie de propiedades y métodos*/
console.log("hola mundo".charAt(0));
let variable5 = 'Informática';
console.log(variable5.length); /*Longitud de la cadena*/

/*Tipo lógico: el tipo de datos es boolean*/
let variable6 = false;
console.log(typeof variable6);
