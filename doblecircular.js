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

        }else{
            let aux = this.primero;
            while(aux.siguiente != this.ultimo){
                aux = aux.siguiente;
            };

            this.ultimo.siguiente = nuevo;
            this.primero.anterior = nuevo;
            nuevo.anterior = this.ultimo;
            nuevo.siguiente = this.primero;
            this.ultimo = nuevo;

        }


    }

    mostrar(){
        let aux = this.primero;
        console.log("***** Mostar Lista  Doble Circular *****")
        while(aux != this.ultimo){
            console.log("-> " + aux.dato);
            aux = aux.siguiente;
        }
    }
}

let lista = new listaDoble();

lista.insertar(10);
lista.insertar(12);
lista.insertar(7);
lista.insertar(5);
lista.mostrar();