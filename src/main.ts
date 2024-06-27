import { Book } from '../src/models/Book';
import { BookStore } from '../src/services/BookStore';
const prompt = require('prompt-sync')();

const tienda = new BookStore();

function mostrarMenu() {
    console.log("\n--- Menú de Opciones ---");
    console.log("1. Agregar libro");
    console.log("2. Buscar libro");
    console.log("3. Eliminar libro");
    console.log("4. Abastecer libro");
    console.log("5. Vender libro");
    console.log("6. Ver caja");
    console.log("7. Salir");
}

function manejarOpcion(opcion: number): boolean {
    switch (opcion) {
        case 1:
            const isbn = prompt('ISBN: ');
            const titulo = prompt('Título: ');
            const precioCompra = parseFloat(prompt('Precio de compra: '));
            const precioVenta = parseFloat(prompt('Precio de venta: '));
            const cantidadActual = parseInt(prompt('Cantidad actual: '), 10);
            const libro = new Book(isbn, titulo, precioCompra, precioVenta, cantidadActual);
            tienda.agregarLibro(libro);
            console.log('Libro agregado exitosamente.');
            break;
        case 2:
            const buscarIsbn = prompt('ISBN del libro a buscar: ');
            const libroBuscado = tienda.buscarLibro(buscarIsbn);
            console.log(libroBuscado ? libroBuscado : 'Libro no encontrado.');
            break;
        case 3:
            const eliminarIsbn = prompt('ISBN del libro a eliminar: ');
            tienda.eliminarLibro(eliminarIsbn);
            console.log('Libro eliminado exitosamente.');
            break;
        case 4:
            const abastecerIsbn = prompt('ISBN del libro a abastecer: ');
            const cantidadAbastecer = parseInt(prompt('Cantidad a abastecer: '), 10);
            tienda.abastecerLibro(abastecerIsbn, cantidadAbastecer);
            console.log('Libro abastecido exitosamente.');
            break;
        case 5:
            const venderIsbn = prompt('ISBN del libro a vender: ');
            const cantidadVender = parseInt(prompt('Cantidad a vender: '), 10);
            tienda.venderLibro(venderIsbn, cantidadVender);
            console.log('Libro vendido exitosamente.');
            break;
        case 6:
            console.log(`Dinero en caja: $${tienda.obtenerCaja()}`);
            break;
        case 7:
            console.log("Saliendo del programa...");
            return false; // Para salir del bucle principal
        default:
            console.log("Opción no válida.");
    }
    return true; // Para continuar en el bucle principal
}

function main() {
    let continuar = true;
    while (continuar) {
        mostrarMenu();
        const opcion = parseInt(prompt('Seleccione una opción: '), 10);
        continuar = manejarOpcion(opcion);
    }
}

main();