'use strict;'


//Crear cadenas
let cadena1= "Esto es una cadena"
let cadena2 = 'Esto es otra cadena'
let cadena3 = new String("Esto también es una cadena"); //No es necesario saberla, es sólo por si la veis
let cadena5 = 'a'



//Longitud de la cadena (.length)
console.log("Longitud cadena 1: " + cadena1.length)
console.log("Longitud cadena 2: " + cadena2.length)

//Sacar un carácter en determinada posición
console.log(cadena1.charAt(5)) //Mejor usar esta
console.log(cadena1[5])
console.log(cadena1[cadena1.length-1]) //Última posición

//Cambiar un carácter -- no funciona con el corchete, hay que coger los pedazos de cadena (substr)
cadena1[0] = 'A'
console.log(cadena1)
cadena1 = 'A' + cadena1.substr(1, cadena1.length-1)

//Cambiar a mayúscuals/minúsuculas
console.log(cadena1.toLowerCase());
console.log(cadena1.toUpperCase());

//Unir cadenas
console.log(cadena1 + " y " + cadena2)
console.log(cadena1.concat(" y " , cadena2))
console.log(cadena1)

//Saber si una cadena incluye otra
console.log("Ballena azul".includes('ballena'));

//Obtener un trozo de una cadena
console.log("Clases especiales".slice(6,-2))
