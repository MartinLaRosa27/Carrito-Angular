import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  public productos: Array<Producto>;
  public productosSeleccionados: Array<Producto>;
  public total: Array<number>

  constructor() {
    this.productosSeleccionados = [];
    this.total = [0];
    this.productos = [
      new Producto(
        'camiseta',
        'Camiseta River Plate',
        16000,
        5,
        'https://marcadegol.com/fotos//2018/08/camiseta-adidas-de-river-plate-2018-19-frente.jpg'
      ),
      new Producto(
        'camiseta',
        'Camiseta Boca Juniors',
        16000,
        2,
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/4fcfb797d457430eaccaaec200dafeb7_9366/Camiseta_Titular_Boca_Juniors_22-23_Azul_HE6323_01_laydown.jpg'
      ),
      new Producto(
        'camiseta',
        'Camiseta Argentina',
        16000,
        0,
        'https://www.afashop.com.ar/ccstore/v1/images/?source=/file/v3363863698249912481/products/HB9215_FC_eCom-0.jpg&height=475&width=475'
      ),
      new Producto(
        'short',
        'Short Argentina',
        8999.99,
        1,
        'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-argentina-adidas-oficial-blanco-100020hk8071001-1.jpg'
      ),
      new Producto(
        'short',
        'Short Boca Juniors',
        8999.99,
        2,
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/26cac397ad524b33911aab3c01388952_9366/Shorts_Uniforme_Titular_Boca_Juniors_20-21_Azul_GL3918_01_laydown.jpg'
      ),
      new Producto(
        'short',
        'Short River Plate',
        8999.99,
        0,
        'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-river-adidas-descanso-gris-100020gu9633001-1.jpg'
      ),
      new Producto(
        'medias',
        'Medias River Plate',
        4499.99,
        10,
        'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e17ea527eceb4c998f51ae8500ae929c_9366/medias-adi-21.jpg'
      ),
      new Producto(
        'medias',
        'Medias Argentina',
        4499.99,
        0,
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/a095ee9dff4d4ded8f3aaf12000d8a95_9366/Medias_Uniforme_Alternativo_de_Argentina_Blanco_HC5838_03_standard.jpg'
      ),
      new Producto(
        'medias',
        'Medias Boca Juniors',
        4499.99,
        3,
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/9b662329be2346e6bee7ab3d011b149f_9366/Medias_Uniforme_Titular_Boca_Juniors_20-21_(UNISEX)_Azul_GL4268_01_standard.jpg'
      ),
    ];
  }

  ngOnInit(): void {}
}
