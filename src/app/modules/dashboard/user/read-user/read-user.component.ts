import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { UserService } from '../../../../core/services/user/user.service';
import { UsuarioDto } from '../../../../core/models/usuario.dto';
import { UsuarioI } from './../../../../core/interfaces/usuarioI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  collection = { count: 0, data: [] };
  usuarios: any[];

  constructor(private usuarioServices: UserService, private router: Router) {

    this.usuarios = [];
  }

  ngOnInit(): void {
    this.cargarDatos();
    console.log(this.usuarios);
  }

  cargarDatos = () => {

    Swal.fire({
      allowOutsideClick: false,
      title: 'Cargando',
      text: 'Espere por favor ...',
      icon: 'info'
    });
    Swal.showLoading();


    // this.usuarioServices.getListUsuarios().subscribe(usuariosSnapshot => {

    //   this.usuarios = usuariosSnapshot.map((e: any) => {
    //     Swal.close();
    //     return {
    //       codigo: e.payload.doc.id,
    //       usuario: e.payload.doc.data().usuario,
    //       apellidoPaterno: e.payload.doc.data().apellidoPaterno,
    //       apellidoMaterno: e.payload.doc.data().apellidoMaterno,
    //       nombres: e.payload.doc.data().nombres,
    //       edad: e.payload.doc.data().edad,
    //       sexo: e.payload.doc.data().sexo,
    //       tipoUsuario: e.payload.doc.data().tipoUsuario
    //     };
    //   });
    // },
    //   error => {
    //     console.error(error);
    //     Swal.fire({
    //       title: 'Error al autenticar!',
    //       text: error.error.error.message,
    //       icon: 'error'
    //     });
    //   }
    // );

    this.usuarioServices.getListUsuarios().subscribe(
      data => {
        this.usuarios = data;
        console.log('lista de usuarios');
        console.log(this.usuarios);
        Swal.close();
          //this.listaVacia = undefined;
      },
      err => {
        this.usuarios = err.error.message;
        Swal.fire({
                title: 'Error al autenticar!',
                text: err.error.error.message,
                icon: 'error'
              });
      }
    );
  }

  borrarUsuario(item: any): void {
    console.log('prueba borrar usuario');
    console.log(item);
    // this.usuarioServices.deleteUsuario(item).subscribe(
    //   data=>{
    //     console.log("eliminado con exito");
    //   },
    //   err=>{
    //     console.log("error al eliminar");
    //   }
    // );
  }

  editarUsuario( item: any){
    console.log('prueba editar usuario');
    //console.log(content);
    console.log(item);
    this.router.navigate(['dashboard/user/edit/'+item]);
  }

}
