import { Book } from '../src/models/Book';
import { BookStore } from './BookStore';

const tienda = new BookStore();

function mostrarMenu() {
    console.log("1. Insertar libro");
    console.log("2. Buscar libro");
    console.log("3. Eliminar libro");
    console.log("4. Abastecer libro");
    console.log("5. Vender libro");
    console.log("6. Ver caja");
    console.log("7. Salir");
}

function manejarOpcion(opcion: number) {
    const prompt = require('prompt-sync')();

    switch () {
        
    }
}