import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { VerCursoComponent } from './ver-curso/ver-curso.component';

const routes: Routes = [
  {
    path: '',
    component: ListarCursoComponent
  },
  {
    path: 'edit/:id',
    component: EditarCursoComponent
  },
  {
    path: 'list',
    component: ListarCursoComponent
  },
  {
    path: 'new',
    component: NuevoCursoComponent
  },
  {
    path: 'detail/:id',
    component: VerCursoComponent
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
export class CursoRoutingModule { }
