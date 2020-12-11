import { Component, OnInit } from '@angular/core';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-matricula',
  templateUrl: './listar-matricula.component.html',
  styleUrls: ['./listar-matricula.component.css']
})
export class ListarMatriculaComponent implements OnInit {

  matriculas: Matricula[]=[];
  constructor(public matriculaService: MatriculaService) { }

  ngOnInit(): void {
   this.cargarMatricula();
  }
  cargarMatricula(){
    this.matriculaService.listar().subscribe((data: Matricula[])=>{
      console.log(data);
      this.matriculas = data;
    });
  }
  borrar(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sip',
      cancelButtonText: 'Nops'
    }).then((result) => {
      if (result.value) {
        this.matriculaService.delete(id).subscribe(res => this.cargarMatricula());
        Swal.fire(
          'OK',
          'Matricula eliminada',
          'success'
        );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Matricula a salvo',
          'error'
        );
      }
    });
  }

}
