import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { LoginUsuarioDto } from '../../../core/models/login-usuario.dto';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { UsuarioDto } from '../../../core/models/usuario.dto';
import { UserService } from '../../../core/services/user/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  usuarioLoginDto!: LoginUsuarioDto;
  usuarioDto!:UsuarioDto;
  recordarme = false;
  dataSexo: any[]=[];
  dataTipoUsuario: any[]=[];
  valorToken: string;


  constructor(private router: Router, private auth: AuthenticationService, private usuarioService:UserService) {
    this.usuarioLoginDto = new LoginUsuarioDto();
    this.usuarioDto = new UsuarioDto();
    this.dataSexo =[{nombre:"Femenino",valor:"FEMENINO"},{nombre:"Masculino",valor:"MASCULINO"}];
    this.dataTipoUsuario =[{nombre:"Profesor",valor:"1"},{nombre:"Alumno",valor:"2"},{nombre:"Administrador",valor:"3"}];
    this.valorToken="";
  }

  ngOnInit(): void {


  }

  registro(form: NgForm): void {
    if (form.invalid) { return; }

    Swal.fire({
      allowOutsideClick: false,
      title: 'Cargando',
      text: 'Espere por favor ...',
      icon: 'info'
    });
    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuarioLoginDto)
      .subscribe(resp => {
        this.usuarioDto.email=resp.email;
        this.usuarioDto.codigo=resp.localId;

        console.log("el resp es");
        console.log(resp);
        this.valorToken=resp.idToken;
        console.log("el valor de valorToken es" );
        console.log(this.valorToken);

        //this.registroUsuario(this.valorToken);



        Swal.close();
        if (this.recordarme) {
          localStorage.setItem('email', this.usuarioLoginDto.email);
        }
        this.router.navigateByUrl('/auth/login');
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          title: 'Error al registrar!',
          text: err.error.error.message,
          icon: 'error'
        });
      });
  }

  registroUsuario(valorToken:string){

    this.usuarioService.crearUsuario(this.usuarioDto).subscribe(
          data => {

            console.log("creado con exito el usurio en bd");
            console.log(data);
          },
          err => {
            console.log("error en crear el usurio en bd");
            console.log(err);
          }
        );
      }
  }
