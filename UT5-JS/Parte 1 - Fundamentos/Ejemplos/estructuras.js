'use strict';

/*Bucles while*/
	//Si tengo una sola instrucción, las } son optativas
	let i=0;
	while(i<10)
		console.log(i++);

	//Para agrupar más de una instrucción usaré las llaves
	i=0;
	while(i<10){
		console.log(i);
		i++;
	}


/*Bucles do-while*/
	//Igualmente, si hay una sola instrucción, no hace falta poner las {}
	console.log("Empiezo j")
	let j=0;
	do
		console.log(j++);
	while (j<10);

/*Estructuras for*/
	//La estructura for admite varias opciones: inicializar varias variables, dejar un campo vacío...
	for(let u=0,v=10; u<10; u++,v--)
		console.log(u + "-" + v);

	for(let u=0,v=10; u<10;)
		console.log(u++ + "-" + v--);
		
