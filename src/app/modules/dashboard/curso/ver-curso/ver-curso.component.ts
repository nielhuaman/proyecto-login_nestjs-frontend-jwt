import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from '../../../../services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../../models/curso';
 import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.css']
})
export class VerCursoComponent implements OnInit {

  curso!: Curso;

  constructor(
    private cursoService: CursoService,
    private activatedRoute: ActivatedRoute,
   //  private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.cursoService.detail(id).subscribe(
      data => {
        this.curso = data;
        
      },
      err => {
  //    this.toastr.error(err.error.message, 'Fail', {
     //     timeOut: 3000,  positionClass: 'toast-top-center',
    //   });
        this.volver();
     }
    );
  }


  volver(): void {
    this.router.navigate(['dashboard/curso/list']);
  }


}
