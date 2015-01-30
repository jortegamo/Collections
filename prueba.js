window.onload = function(){
	console.log("se esta ejecutando la prueba.");
	console.log("voy a llamar a la funcion de prueba de mi CuteLib");
	console.log("objeto miLibreria: " + µ);	
	var linkedList = µ.create("linkedList");
	var doubleList = µ.create("doubleLinkedList");
	var hashTable = µ.create("hashTable");
	var collections = [linkedList,doubleList,hashTable];
	for (i=0;i<collections.length;i++){
		console.log(collections[i].identify());
	}
	console.log("voy a probar método es una coleccion: ");
	console.log(µ.execute([linkedList,doubleList],['identify','identify'],[undefined,undefined]) + " debe ser true");
	console.log(µ.execute({},'has') + " debe ser null");
};
