import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-create-matricula',
  templateUrl: './create-matricula.component.html',
  styleUrls: ['./create-matricula.component.css']
})
export class CreateMatriculaComponent implements OnInit {

  codalumno: string = '';
  fechahora_registro = '';
  periodo_academico = '';
  // constructor(private matriculaService: MatriculaService,
  //   private toastr: ToastrService,
  //   private router: Router) {
  //   this.codalumno = '0';
  //   this.fechahora_registro = '0';
  //   this.periodo_academico = '0';
  // }

  ngOnInit(): void {
  }
  onCreate(): void {
    // const matricula = new Matricula(this.codalumno, this.fechahora_registro, this.periodo_academico);
    // this.matriculaService.save(matricula).subscribe(
    //   data => {
    //     this.toastr.success(data.message, 'OK', {
    //       timeOut: 3000, positionClass: 'toast-top-center'
    //     });
    //     this.volver();
    //   },
    //   err => {
    //     this.toastr.error(err.error.message, 'Fail', {
    //       timeOut: 3000, positionClass: 'toast-top-center',
    //     });
    //   }
    // );
  }

  volver(): void {
    // this.router.navigate(['/enrollment']);
  }
}
