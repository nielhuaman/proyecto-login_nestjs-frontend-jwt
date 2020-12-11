import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DetalleProductoComponent,EditarProductoComponent,ListaProductoComponent,NuevoProductoComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FormsModule
  ]
})
export class ProductoModule { }
