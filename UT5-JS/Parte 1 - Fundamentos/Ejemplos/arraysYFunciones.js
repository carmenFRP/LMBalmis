'use strict';

let frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']
let puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
let numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
}); // [1, 2, 3, 4, 5]
let cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.


/*Ordenar un array. Sort puede recibir como parámetro una función. Necesita una función de ordenación, por ejemplo una resta que me va a devolver uno de los tres valroes posibles*/
let n = ["Jaime", "Juanma", "Antonio","Carlos"]
console.log(n.sort())
let o = [10,97,4,56]
console.log(o.sort())
o.sort((n1,n2) => n1-n2)
console.log(o)

/*Every. Devuelve un booleano indicando si todos los elementos del array cumplen determinada condición*/
console.log(o.every(n1 => n1 < 100 ))
console.log(o.every(n1 => n1 % 2 == 0 ))

/*Some. Igual que every. Devuelve cierto en el momento que uno de los elementos del array cumple la condición*/
let secreto = 86;
console.log(o.some(n1=>n1==secreto)?'Sí':'No')

/*Foreach.Itera los elementos del array, podemos llevar el índice y el array*/
let sum = 0;
console.log(o)
o.forEach(num=>sum+=num);
console.log(sum)

/*Modificar todos los elementos del array: map. Con esta función transformamos cada elemento y se retorna un array con los elementos cambiados*/
let p = [4,21,33,12,9,54];
console.log(p.map(num=>num*2))
console.log(p)

/*Filtrar los elementos de un array: filter. Retorna un nuevo array con aquellos elementos que cumplan la condición*/
console.log(p.filter(num=>num%2 == 0));

/*Objetos en JS. Constructor de la clase*/
function Clase(curso, numAlumnos)
{
	this.curso = curso;
	this.numAlumnos = numAlumnos;

	this.toString=function()
	{
		return this.curso + "(" + this.numAlumnos + ")";
	}
}
let clases=[];
clases[0] = new Clase("DamA",17)
clases[1] = new Clase("DamB",15)
clases[2] = new Clase("ASIR",22)
console.log(clases.toString())
console.log(clases.sort((c1,c2) => c1.numAlumnos-c2.numAlumnos))
