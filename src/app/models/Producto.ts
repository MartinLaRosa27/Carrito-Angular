export class Producto {
  public categoria: string;
  public nombre: string;
  public precio: number;
  public stock: number;
  public img: string;

  constructor(
    categoria: string,
    nombre: string,
    precio: number,
    stock: number,
    img: string
  ) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
  }

  public eliminarStock = (): void => {
    if (this.stock > 0) {
      this.stock--;
    }
  };

  public agregarStock = (): void => {
    this.stock++;
  };
}
