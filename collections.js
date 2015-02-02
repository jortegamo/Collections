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

    var NodeList = function(value){
      this.value = value;
      this.next;
    }

    //********************//
    //    LINKED-LISTS    //
    //********************//
   
  	//constructor para listas enlazadas
  	LinkedList = function(){
  		this.size = 0;
      this.first;
      this.last;
  	}

    LinkedList.prototype.addByPos = function(pos,value){
      if (pos!= undefined && value!= undefined){
        if (pos == 0){
          this.addFirst(value);
        }else if(pos == this.size){
          this.addLast(value);
        }else if(pos > 0){ //todos los demas casos validos.
          var aux = this.first;
          for (i=0;i<pos-1){
            aux = this.first.next;
          }
          var n = new NodeList(value);
          n.next = aux.next;
          aux.next = n; //insertamos el nuevo valor moviendo todos los demás.
          this.size ++;
        }
      }
    }

    LinkedList.prototype.addValue = function (value){
      if (value)
      this.addLast(value);
    }

    LinkedList.prototype.addFirst = function(){
      if (value){
        if (!first){
          this.first = new NodeList(value);
          this.last = this.first;
        }else{
          var n = new NodeList (value);
          n.next = this.first;
          this.first = n;
        }
        this.size ++;
      }

    }

    LinkedList.prototype.addLast = function(value){
      if (value){
        if (!first){
         this.first = new NodeList(value);
         this.last = this.first;
        }else{
         this.last.next = new NodeList(value);
         this.last = this.last.next();
        } 
        this.size ++;
      }
    }

    LinkedList.prototype.removeByPos = function(pos){
      if (pos != undefined){
        var aux = this.first;
        if (pos == 0){ //borrar el primero
          this.first = aux.next;
          aux.next = null;
        }else if(pos > 0){
          for (i=0;i<pos-1;i++){ //vamos iterando la lista.
            aux = aux.next;
          }
          if (aux != this.last){ //borrar intermedios
            var aux2 = aux.next;
            aux = aux.next.next;
            aux2.next = null;
          }else if(pos == this.size - 1){ //borrar el ultimo
            this.last = aux;
            aux.next = null;
          }
        }
        this.size --; //actualizamos el tamaño de la lista.
      }else{
        this.removeLast();
      }
    }

    LinkedList.prototype.remove = function(value){
      if (value){
        var aux = this.first;
        for (i=0;i<this.size)
      }
    }

    LinkedList.prototype.removeLast = function(){
      var aux = this.first;
      for (i=0; i<this.size-1; i++){
        aux = aux.next;
      }
      if (aux){//solo hay un elemento en la lista.
        this.first = this.last = null;
      }else{//mas de un elemento en la lista.
        this.last = aux;
        aux.next = null;
      }
      this.size --; //actualizamos el tamaño de la lista
    }

    LinkedList.prototype.removeFirst = function(){
      var aux = this.first;
      if (this.first == this.last){ //solo un elemento en la lista.
        this.first = this.last = null;
      }else{//mas de un elemento en la lista
        this.first = aux.next;
        aux.next = null;
      }
      this.size --; //actualizamos el tamaño de la lista.
    }


  	LinkedList.prototype.identify = function(){
  		return "soy una linkedList"
  	}

  	LinkedList.prototype.has = function (){
  		return true;
  	}

    LinkedList.prototype.convert = function(typeList){
      if (typeList){
        var convertList;
        switch(typeList){
          case 'double':
            convertList = new DoubleLinkedList ();
            var aux = this.first;
            for (i=0;i<this.size){
              dLL.add(aux.value);
              aux = aux.next;
            }
        }
        this = convertList; //ahora la lista es otro tipo de lista.
      }
    }

    //**************************//
    //    DOUBLE-LINKED-LIST    //
    //**************************//
    
  	//constructor para listas doblemente enlazadas
  	DoubleLinkedList = function(){
  		this.size = 0;
  	}

    DoubleLinkedList.prototype.add = function(value){

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