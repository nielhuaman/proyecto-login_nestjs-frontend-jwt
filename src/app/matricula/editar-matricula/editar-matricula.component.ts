import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-editar-matricula',
  templateUrl: './editar-matricula.component.html',
  styleUrls: ['./editar-matricula.component.css']
})
export class EditarMatriculaComponent implements OnInit {
  matricula!: Matricula;
  constructor( private matriculaService: MatriculaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.matriculaService.detail(id).subscribe(
      data => {
        this.matricula = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.matriculaService.update(id, this.matricula).subscribe(
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
    this.router.navigate(['/enrollment']);
  }
}
