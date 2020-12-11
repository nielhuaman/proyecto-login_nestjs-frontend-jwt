import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  {
    path:'',
    component:ListaProductoComponent
  },
  {
    path:'detalle',
    component:DetalleProductoComponent
  },
  {
    path:'editar',
    component:EditarProductoComponent
  },
  {
    path:'listar',
    component:ListaProductoComponent
  },
  {
    path:'nuevo',
    component:NuevoProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
