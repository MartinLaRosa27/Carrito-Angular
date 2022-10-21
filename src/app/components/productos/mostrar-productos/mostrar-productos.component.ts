import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css'],
})
export class MostrarProductosComponent implements OnInit {
  @Input() productos: Array<Producto>;
  @Input() productosSeleccionados: Array<Producto>;
  @Input() total: Array<number>;

  constructor() {
    this.productos = [];
    this.productosSeleccionados = [];
    this.total = [0];
  }

  ngOnInit(): void {}

  public agregarProducto = (producto: Producto): void => {
    this.productosSeleccionados.push(producto);
    producto.eliminarStock();
    this.total[0] += producto.precio;
    localStorage.setItem(
      'productosSeleccionados',
      JSON.stringify(this.productosSeleccionados)
    );
    Swal.fire({
      text: `"${producto.nombre}" se agrego al carrito`,
      icon: 'success',
    });
  };
}
