import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmar-compra',
  templateUrl: './confirmar-compra.component.html',
  styleUrls: ['./confirmar-compra.component.css'],
})
export class ConfirmarCompraComponent implements OnInit {
  @Input() productos: Array<Producto>;
  @Input() productosSeleccionados: Array<Producto>;
  @Input() total: Array<number>;

  constructor() {
    this.productosSeleccionados = [];
    this.productos = [];
    this.total = [0];
  }

  ngOnInit(): void {}

  public eliminarProducto = (producto: Producto) => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: `¡Desea eliminar "${producto.nombre}" del carrito de compras?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        producto.agregarStock();
        const indice: number = this.productosSeleccionados.indexOf(producto);
        this.productosSeleccionados.splice(indice, 1);
        Swal.fire(
          'Eliminado!',
          `"${producto.nombre}" se elimino al carrito`,
          'success'
        );
      }
    });
  };

  public confirmarCompra = () => {
    Swal.fire({
      title: 'Confirmar Compra',
      text: `Total a pagar: $${Number(this.total[0].toFixed(2))}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosSeleccionados.length = 0;
        Swal.fire({
          title: 'Compra realizada correctamente',
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'No se realizo la compra',
          icon: 'error',
        });
      }
    });
  };
}
