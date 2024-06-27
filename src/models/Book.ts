export class Book {
    public isbn: string;
    public titulo: string;
    public precioCompra: number;
    public precioVenta: number;
    public cantidadActual: number;

    constructor(isbn: string, titulo: string, precioCompra: number, precioVenta: number, cantidadActual: number) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidadActual = cantidadActual;
    }
}
