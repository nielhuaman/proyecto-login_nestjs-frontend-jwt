import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMatriculaComponent } from './create-matricula/create-matricula.component';
import { DetalleMatriculaComponent } from './detalle-matricula/detalle-matricula.component';
import { EditarMatriculaComponent } from './editar-matricula/editar-matricula.component';
import { EliminarMatriculaComponent } from './eliminar-matricula/eliminar-matricula.component';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';

const routes: Routes = [
  {
    path: '',
    component: ListarMatriculaComponent
  },
  {
    path: 'new',
    component: CreateMatriculaComponent
  },
  {
    path: 'detail',
    component: DetalleMatriculaComponent
  },
  {
    path: 'edit',
    component: EditarMatriculaComponent
  },
  {
    path: 'delete',
    component: EliminarMatriculaComponent
  },
  {
    path: 'list',
    component: ListarMatriculaComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculaRoutingModule { }
