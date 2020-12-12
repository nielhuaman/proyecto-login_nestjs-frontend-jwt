import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursoRoutingModule } from './curso-routing.module';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { VerCursoComponent } from './ver-curso/ver-curso.component';


@NgModule({
  declarations: [EditarCursoComponent, ListarCursoComponent, NuevoCursoComponent, VerCursoComponent],
  imports: [
    CommonModule,
    FormsModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
