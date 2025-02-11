

/*Tipos numéricos*/
	/*Operadores matemáticos*/
		console.log(2+3-1)
		console.log(2+4*3) //Se respeta la prioridad de las operaciones
		console.log(4%2) //Saca el resto de la división
		console.log(2**3) //Potencia
		let variable1 = 5;
		console.log(++variable1) //Como va delante, le suma uno más y luego muestra el valor. Igual funciona con el --
		console.log(variable1++) //Primero muestra el valor y después le suma 1. Igual funciona con el --
		console.log(variable1)
	/*Operadores relacionales*/
		console.log(5 > 3) //Mayor
		console.log(5 < 3) //Menor
		console.log ( 5 == 3) //Compara si son iguales
		console.log(5 === "5")
		console.log(5 == "5")
	/*Operadores resumidos*/
		let variable2 = 2;
		variable2 += 3; //Suma a variable2 el valor de 3 y lo guarda en variable2. Funciona también para el -
		console.log(variable2)
		variable2 *= 2; //Multiplica variable2 por 2 y lo guarda en variable2. Funciona también para la /
		console.log(variable2)

/*Cadenas y números*/
let variable3 = "hola"
let variable4 = 5;
console.log(variable3 + variable4) //En el momento que haya una sola cadena, el operador + une

let variable5 = "6"
console.log(+variable5 + variable4);//Con el operador + delante, convertimos de tipo cadena a tipo numérico

let variable6 ="3"
console.log(variable6*variable4); //Si es un operador distinto al + y la cadena se puede convertir a tipo numérico, realiza la operación


let edad = Number(prompt("Dame tu edad, por favor"))
console.log(edad + 10) //También podemos usar Number() para convertir una cadena a número*/
