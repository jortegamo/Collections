//LIBRERIA PARA CREAR TABLAS HASH Y LISTAS ENLAZADAS.

(function (µ, undefined){
	µ.VERSION = 1.0;

	//se declaran los constructores de las collecciones.
	var 
		collections,
		LinkedList, 
		DoubleLinkedList, 
		HashTable;	

  	

  	var isACollection = function (obj){
  		var is = false;
  		for (i=0; i<collections.length; i++){
  			is = obj instanceof collections[i];
			if (is) break;
  		}
  		return is;
  	}

  	var isFunction = function (functionToCheck) {
 		var getType = {};
 		return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}	

  	var isArray = function (obj){
  		return obj instanceof Array;
  	}

	//metodo raiz para generar colecciones.
  	µ.create = function (typeCollection){
  		var collection;
  		if (typeCollection){
  			switch (typeCollection){
  				case "linkedList":
  					collection = new LinkedList();
  					break;
  				case "doubleLinkedList":
  					collection = new DoubleLinkedList();
  					break;
  				case "hashTable":
  					collection = new HashTable();
  					break;
  			}
  		}
  		return collection;
  	}

  	//esta funcion ejecuta las funciones o atributos de varias collecciones. Si no quieres pasar argumentos es necesario
  	//pasar undefined en la posicion correspondiente.
  	µ.execute = function (arrayObjects,arrayProps,arrayArguments){
  		var respuesta = [];
  		if (isArray(arrayObjects) && isArray(arrayProps) && isArray(arrayArguments)){
  			console.log("entro en condicion correcta");
  			for (var i=0; i< arrayObjects.length; i++){
  				console.log("voy a llamar a execute");
  				respuesta.push(execute(arrayObjects[i],arrayProps[i],arrayArguments[i]));
  			}
  		}
  		return respuesta;
  	}

  	//llamar de manera unanime a todos los metodos de los objetos que permite crear esta libreria.
  	//El obj debe ser una coleccion,
  	//prop será un atributo válido del objeto.
  	//arguments deberá ser [] o no pasarse, apply se encarga de llamar con o sin argumentos a la funcion.
  	var execute = function (obj,prop,arguments){
  		console.log("se ha llamado a execute con obj: " + obj + " prop: " + prop + ", arguments: " + arguments);
  		if (isACollection(obj)){ //si el objeto es una coleccion
  			if (obj[prop]){ //si el objeto tiene la propiedad
  				//si la propiedad es una funcion se devuelve el resultado de dicha funcion y si es una atributo se devuelve su valor.
  				return (isFunction(obj[prop])) ? obj[prop].apply(obj,arguments) : obj[prop];
  			}
  		}
  		return null;
  	}

  	//constructor para listas enlazadas
  	LinkedList = function(){
  		this.size = 0;
  	}

  	LinkedList.prototype.identify = function(){
  		return "soy una linkedList"
  	}

  	LinkedList.prototype.has = function (){
  		return true;
  	}

  	//constructor para listas doblemente enlazadas
  	DoubleLinkedList = function(){
  		this.size = 0;
  	}

  	DoubleLinkedList.prototype.identify = function(){
  		return "soy una doubleLinkedList"
  	}
  	DoubleLinkedList.prototype.has = function (){
  		return true;
  	}

  	//constructor para tablas hash
  	HashTable = function(){
  		this.size = 0;
  	}

  	HashTable.prototype.identify = function(){
  		return "soy una hashTable"
  	}
  	HashTable.prototype.has = function (){
  		return true;
  	}

  	


  	//aqui tenemos las colecciones.
	collections = [LinkedList, 
					   DoubleLinkedList, 
					   HashTable];

})(window.µ = window.µ || {}); 
//si no esta declarada la variable µ entonces µ sera un objeto vacío al que se le 
//añadiran métodos y atributos dentro de la libreria.