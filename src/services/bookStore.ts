import { Book } from '../models/Book'
import { transaction } from '../models/transaction';

export class BookStore {
    private catalogo: Book [] = []
    private transacciones: { [isbn: string]: transaction[]} = {};
    private caja: number = 0;

    agregarLibro(libro: Book): void {
        if (!this.catalogo.find(b => b.isbn === libro.isbn)) {
            this.catalogo.push(libro);
            this.transacciones[libro.isbn] = [];
        } else {
            throw new Error('Ya existe un libro con este ISBN.');
        }
    }

    buscarLibro(isbn: string): Book | undefined {
        return this.catalogo.find(libro => libro.isbn === isbn);
    }

    eliminarLibro(isbn: string): void {
        this.catalogo = this.catalogo.filter(libro => libro.isbn !== isbn);
        delete this.transacciones[isbn];
    }

    abastecerLibro(isbn: string, cantidad: number): void {
        const libro = this.buscarLibro(isbn);
        if (libro) {
            libro.cantidadActual += cantidad;
            this.transacciones[isbn].push(new transaction('abastecimiento', new Date(), cantidad));
        } else {
            throw new Error('Libro no encontrado.');
        }
    }

    venderLibro(isbn: string, cantidad: number): void {
        const libro = this.buscarLibro(isbn);
        if (libro) {
            if (libro.cantidadActual >= cantidad) {
                libro.cantidadActual -= cantidad;
                this.caja += libro.precioVenta * cantidad;
                this.transacciones[isbn].push(new transaction('venta', new Date(), cantidad));
            } else {
                throw new Error('No hay suficiente cantidad en stock.');
            }
        } else {
            throw new Error('Libro no encontrado.');
        }
    }

    obtenerCaja(): number {
        return this.caja
    }
}