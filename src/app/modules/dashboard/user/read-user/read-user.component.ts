import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { UserService } from '../../../../core/services/user/user.service';
import { UsuarioDto } from '../../../../core/models/usuario.dto';
import { UsuarioI } from './../../../../core/interfaces/usuarioI';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  collection = { count: 0, data: [] };
  usuarios: any[];

  constructor(private usuarioServices: UserService) {

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


    this.usuarioServices.getListUsuarios().subscribe(usuariosSnapshot => {

      this.usuarios = usuariosSnapshot.map((e: any) => {
        Swal.close();
        return {
          codigo: e.payload.doc.id,
          usuario: e.payload.doc.data().usuario,
          apellidoPaterno: e.payload.doc.data().apellidoPaterno,
          apellidoMaterno: e.payload.doc.data().apellidoMaterno,
          nombres: e.payload.doc.data().nombres,
          edad: e.payload.doc.data().edad,
          sexo: e.payload.doc.data().sexo,
          tipoUsuario: e.payload.doc.data().tipoUsuario
        };
      });

      // let usuarioDto: UsuarioDto;
      // usuariosSnapshot.forEach((usuarioData: any) => {
      //   usuarioDto = new UsuarioDto();
      //   usuarioDto.codigo = usuarioData.payload.doc.codigo;
      //   usuarioDto.usuario = usuarioData.payload.doc.usuario;
      //   usuarioDto.apellidoPaterno = usuarioData.payload.doc.apellidoPaterno;
      //   usuarioDto.apellidoMaterno = usuarioData.payload.doc.apellidoMaterno;
      //   usuarioDto.nombres = usuarioData.payload.doc.nombres;
      //   usuarioDto.edad = usuarioData.payload.doc.edad;
      //   usuarioDto.sexo = usuarioData.payload.doc.sexo;
      //   usuarioDto.tipoUsuario = usuarioData.payload.doc.tipoUsuario;
      //   console.log('usuarioData');
      //   console.log(usuarioData);
      //   console.log('prueba de codigo');
      //   console.log(usuarioData.payload.doc.codigo);
      //   const constUsuarioString = JSON.stringify(usuarioDto);
      //   const data = JSON.parse(constUsuarioString);

      //   this.usuarios.push(data);
      // });
    },
      error => {
        console.error(error);
        Swal.fire({
          title: 'Error al autenticar!',
          text: error.error.error.message,
          icon: 'error'
        });
      }
    );
  }

  borrarUsuario(item: any): void {
    console.log('prueba borrar usuario');
    console.log(item);
    this.usuarioServices.deleteUsuario(item.codigo);
  }

  editarUsuario( item: any){
    console.log('prueba editar usuario');
    //console.log(content);
    console.log(item);
  }

}
