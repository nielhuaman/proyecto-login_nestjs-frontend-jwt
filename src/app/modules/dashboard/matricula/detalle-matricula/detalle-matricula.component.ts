import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-detalle-matricula',
  templateUrl: './detalle-matricula.component.html',
  styleUrls: ['./detalle-matricula.component.css']
})
export class DetalleMatriculaComponent implements OnInit {
  matricula!: Matricula;
  // constructor(  private  matriculaService: MatriculaService,
  //   private activatedRoute: ActivatedRoute,
  //   private toastr: ToastrService,
  //   private router: Router) { }


  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params.id;
    // this.matriculaService.detail(id).subscribe(
    //   data => {
    //     this.matricula = data;
    //   },
    //   err => {
    //     this.toastr.error(err.error.message, 'Fail', {
    //       timeOut: 3000,  positionClass: 'toast-top-center',
    //     });
    //     this.volver();
    //   }
    // );
  }
  volver(): void {
    // this.router.navigate(['/enrollment']);
  }

}
