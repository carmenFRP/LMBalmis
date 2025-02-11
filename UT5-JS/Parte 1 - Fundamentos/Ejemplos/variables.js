'use strict';

/*sin 'use stict' podemos usar la variable sin declararla. Descomenta este fragemento para probar y mira consola en el navegador
numero = 8;
console.log(numero)
*/

//Nombres válidos de variables (aunque recuerda que usaremos CamelCase)
let $numero;
let _numero;
let _$numero1;
let numeroPar;

//Nombres de variables no válidos. Descomentar y mirar consola del navegador
/*let 1numero;
let numero#;
let numero!Par;*/

/*Variable sin inicializar. Su valor es undefined*/
var numero;
console.log(numero)

// Ámbitos. Ejemplo con var, podrás ver que la puedes usar antes de declararla, aunque estemos con la directiva 'use strict'
console.log("Número antes de declarar: "  + numero2)
var numero2 = 14;
console.log(numero2)

//Ámbitos. Ejemplo con let, podrás ver que NO la puedes usar antes de declararla.Descomentar y mirar consola del navegador
/*console.log("Número antes de declarar: " + numero3)
let numero3 = 14;
console.log(numero3)*/


//Ámbitos. Con var, las variables fuera de su bloque siguen existiendo
var i=1
  if(true)
  {
    var i=2;
    console.log(i)
  }
console.log(i)


//Ámbitos. Con let, las variables son distintas en cada bloque
let j=1
  if(true)
  {
    let j=2;
    console.log(j)
  }
console.log(j)
