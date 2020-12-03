import { TokenService } from './../services/token.service';
import { CursoService } from './../services/curso.service';
import { Curso } from './../models/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {
  cursos: Curso[] = [];
  listaVacia = undefined;
  isAdmin: boolean;
  constructor(
    private cursoService: CursoService,
    private tokenService: TokenService
  ) {
    this.isAdmin = this.tokenService.isAdmin();
  }

  ngOnInit(): void {
    this.cargarCursos();
    //this.isAdmin = this.tokenService.isAdmin();
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

}
