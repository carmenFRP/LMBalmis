'use strict';

/*Estructura condicional*/
let precio = 65;

if( precio < 50)
    console.log("Super barato")
else if (precio < 100)
    console.log("Está bien")
else
    console.log("Caro");

/*Switch. Se pueden hacer evaluaciones en los propios casos*/

let edad = prompt("¿Cuál es tu edad?")

switch(true)
{
    case Number(edad)<18:
        console.log(`Eres muy pequeño, ${edad} para entrar`)
    break;

    case +edad<65:
        console.log("Adelante!")
    break;

    default:
        console.log("Te has ganado la zona VIP")
    break;

}

/*Conversiones booleanas*/
if (0) { // 0 es falso
    alert("Por aquí no pasas");
  }

  if (5) { // Cualquier número distinto de 0 es verdadero
    alert("Por aquí pasas");
  }

/*Operador ternario
let result = condition ? value1 : value2; => OJO retorna un valor*/
let accesoPermitido = edad > 18 ? true : false;
alert("Acceso permitido " + accesoPermitido)


/*Si no pones el break, continúa la ejecución*/
let opcion = prompt("Introduce una opción (1 y 2 sumar, 3 y 5 restar, 5 salir)")

switch(opcion)
{
  case 1:
  case 2:
    console.log("Vas a sumar");
  break;
  case 3:
  case 4:
    console.log("Vas a restar");
  break;
  default:
    console.log("Salir");
  break;
}

/*Estructuras repetitivas*/
let valor= 1;
while(valor <= 5 ) console.log(valor++)
valor = 1;
do { console.log(valor++ )} while(valor <= 5);
let limite = 5;
for(let i =0; i < limite; i++)
    console.log(i)
//console.log(i) //¡Ámbito de la variable!
let j=5;
for(let i =0;j>0 && i < limite;j--, i++)
    console.log(i + " " + j)

/*Imprimir los números, excepto los múltiplos de 3*/
//Existe también la instrucción break
for(let i=0; i < 10; i++)
{
    if(i % 3 == 0) continue
    console.log(i)
}
