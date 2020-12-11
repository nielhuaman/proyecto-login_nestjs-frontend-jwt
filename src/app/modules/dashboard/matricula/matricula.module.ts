import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatriculaRoutingModule } from './matricula-routing.module';
import { CreateMatriculaComponent } from './create-matricula/create-matricula.component';
import { DetalleMatriculaComponent } from './detalle-matricula/detalle-matricula.component';
import { EditarMatriculaComponent } from './editar-matricula/editar-matricula.component';
import { EliminarMatriculaComponent } from './eliminar-matricula/eliminar-matricula.component';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';


@NgModule({
  declarations: [CreateMatriculaComponent, DetalleMatriculaComponent, EditarMatriculaComponent, EliminarMatriculaComponent, ListarMatriculaComponent],
  imports: [
    CommonModule,
    MatriculaRoutingModule,
    FormsModule
  ]
})
export class MatriculaModule { }
