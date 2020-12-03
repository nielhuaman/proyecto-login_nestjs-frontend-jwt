import { Curso } from './../models/curso';
import { CursoService } from './../services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

  codigo = '';
  codigoProfesor: number;
  nombre = '';
  curso = '';
  numeroCiclo: number;
  creditos: number;

  constructor(

    private cursoService: CursoService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.codigoProfesor = 0;
    this.numeroCiclo = 0;
    this.creditos = 0;
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const curso = new Curso(this.codigo, this.codigoProfesor,this.nombre, this.curso, this.numeroCiclo,
this.creditos);
    this.cursoService.save(curso).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/curso-lista']);
  }
}
