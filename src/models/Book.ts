export class Book {
    isbn: string;
    titulo: string;
    imagen: string;
    precioCompra: number;
    precioVenta: number;
    cantidadActual: number;

    constructor(isbn: string, titulo: string, imagen: string, precioCompra: number, precioVenta: number, cantidadActual: number) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.imagen = imagen;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidadActual = cantidadActual;
    }
}
