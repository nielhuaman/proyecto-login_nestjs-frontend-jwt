import { TokenService } from '../../../../services/token.service';
import { CursoService } from '../../../../services/curso.service';
import { Curso } from '../../../../models/curso';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {
  cursos: Curso[] = [];
  listaVacia = undefined;
  //isAdmin: boolean;
  constructor(
    private cursoService: CursoService,
    private tokenService: TokenService
  ) {
    //this.isAdmin = this.tokenService.isAdmin();
  }

  ngOnInit(): void {
    this.cargarCursos();

  }


  cargarCursos(): void {
     this.cursoService.listacurso().subscribe(
      data => {
       this.cursos = data;
         this.listaVacia = undefined;
     },
     err => {
       this.listaVacia = err.error.message;
      }
     );
  }

  borrar(id: number): void {
    // Swal.fire({
    //   title: '¿Estás seguro?',
    //   text: 'No hay vuelta atrás',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Sip',
    //   cancelButtonText: 'Nops'
    // }).then((result) => {
    //   if (result.value) {
    //     this.cursoService.delete(id).subscribe(res => this.cargarCursos());
    //     Swal.fire(
    //       'OK',
    //       'Curso eliminado',
    //       'success'
    //     );
    //   // For more information about handling dismissals please visit
    //   // https://sweetalert2.github.io/#handling-dismissals
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     Swal.fire(
    //       'Cancelado',
    //       'Curso a salvo',
    //       'error'
    //     );
    //   }
    // });
  }

}
