'use strict';

/*Creación de arrays*/
  //Crear array usando el constructor, es posible omitir el new
  let a = new Array();
  //Crear arrays usando el operador [] (un literal). RECOMENTADO, MÁS EFICIENTE.
  let d = [1,2,3,4,5,6,7] 


/*Acceso a elementos del array*/
  /*Puedo acceder a un elemento en concreto usando un índice*/
  a[0] = 15;
  console.log("Elemento en primera posición de a: " + a[0])
  /*Puedo acceder a posiciones mayores o iguales que la longitud del array*/
  console.log("Longitud de a: " + a.length)
  console.log("Accedo a una posición mayor que su longitud: " + a[2])

/*Longitud del array*/
  let b = new Array(12) /*Con un sólo número creo un Array de esa longitud. Poniendo más de un número creo arrays con esos elementos. No puedo poner un sólo número negativo o décimal puesto que son longitudes no válidas. Para solventarlo podemos usar el método Array.of()*/
  console.log("Longitud después de crearlo: " + b.length)
  b[20] = 'z'
  console.log("Longitud después de guardar en una posición mayor o igual que su longitud anterior: "  + b.length)
  b.length = 2;
  console.log("Longitud después de editar la propiedad length: " +  b.length);
  console.log("Valor de la posición 20 del array: " + b[20]); //Al editar la longitud, he eliminado el elemento
  /*Borrar un array rápidamente*/
  /*b.length=0*/
  /*Se puede acceder al último elemento fácilmente (y a cualquier otro...)*/
  console.log(b.at(-1))


/*Imprimir y recorrer arrays*/
  let c = new Array("a","b","c","d","f","g")
  console.log(c)

  for(let i in c) /*Poco eficaz, no usar*/
    console.log("C[" + i + "]:" + c[i])

  for(let i of c)
    console.log("C["  + "]:" + i)

/*Métodos*/
  /*Insertar y extraer elementos del ppo y del final*/
  console.log("-------------------")
  let e = []
  //Insertar elementos al final
  e.push("b",5,"s")
  console.log(e)
  //Insertar elementos al ppo
  e.unshift("a")
  console.log(e)
  //Borrar elementos al final
  e.pop();
  console.log(e)
  //Borrar elementos al ppo
  e.shift()
  console.log(e)


  //Convertir array a string
  console.log(e.join())
  //Puedo incorporar un separador
  console.log(e.join("/"))
  //También puedo usar toString
  let arr = [1, 2, 3];

  alert( arr ); // Se invoca automáticamente ToString()
  alert( String(arr) === '1,2,3' ); // true


  //Slice y splice
  let f = [1,2,3,4,5,6,7,8]
  let g = f.slice(2,4)
  console.log("Subarray: " + g)
  console.log("Array original: "+ f)
  console.log(f.slice(2))


  /*let h = f.splice(3,2)
  console.log(h)
  console.log(f)*/
  console.log(f.splice(1,1,"g","h"))
  console.log(f)
  console.log(f.splice(3,0,"i","j","k"))
  console.log(f)


//Rest
function imprimirLenguajes(nombre,...lenguajes)
{
    console.log(nombre + " sabe " + lenguajes.length + " lenguajes: " + lenguajes.join())
    console.log(nombre + " sabe " + lenguajes.length + " lenguajes: " + lenguajes.toString())

}
imprimirLenguajes("Pedro","Java", "C#", "C++")
imprimirLenguajes("María","JS","PHP")

//Spread
let numeros = [12,32,6,8]
console.log(Math.max(numeros))
console.log(Math.max(...numeros))

/*Desestructurar arrays*/
  //Extraigo todos los elementos del array
  let [primero,segundo,tercero,cuarto] = numeros;
  alert(primero)
  alert(segundo)
  alert(tercero)
  alert(cuarto)

  //Extraigo determinados elementos e incluso el resto ponerlos en un subarray usando rest
  let [pElemento,,...resto] = numeros
  alert(pElemento)
  alert(resto)

/*Arrays y funciones*/
let j = [21,22,23,24]
let sum = 0;
j.forEach(num => sum += num)
console.log(sum)

/*Matrices*/
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matriz[1][1] )

//Comparar arrays => Hay que hacer un recorrido
alert( [] == [] ); // false
alert( [0] == [0] ); // false
alert( 0 == [] ); // true
alert('0' == [] ); // false

