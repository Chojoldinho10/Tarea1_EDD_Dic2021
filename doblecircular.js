class nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class listaDoble{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    insertar(dato){
        let nuevo = new nodo(dato); 

        if(this.primero == null){  //la lista esta vacia
            this.primero = nuevo;
            this.ultimo = nuevo;
            this.primero.siguiente = nuevo;
            this.primero.anterior = nuevo;
            this.ultimo.siguiente = nuevo;
            this.ultimo.anterior = nuevo;
           
           
        }else{
            
            let aux = this.primero;
            
            if(this.primero == this.ultimo){ //Solo hay un nodo
                this.primero.siguiente = nuevo;
                this.primero.anterior = nuevo;
                nuevo.anterior = this.primero;
                nuevo.siguiente = this.primero;
                this.ultimo = nuevo;
                

            }else{
               
                while(aux != this.ultimo){
                    aux = aux.siguiente;

                };
               
                aux.siguiente = nuevo;
                nuevo.anterior = aux;
                nuevo.siguiente = this.primero;
                this.primero.anterior = nuevo;
                this.ultimo = nuevo;

               
            }
            
        }
    }

    mostrar(){
      
        let aux = this.primero;
        console.log("***** Mostar Lista *****")
       
       do{
        console.log("-> " + aux.dato);
        aux = aux.siguiente;
       }while(aux != this.ultimo)
       console.log("-> " + aux.dato);
        
    }
}

let lista = new listaDoble();

lista.insertar(1);
lista.insertar(12);
lista.insertar(7);
lista.insertar(5);
lista.insertar(3);
lista.mostrar();