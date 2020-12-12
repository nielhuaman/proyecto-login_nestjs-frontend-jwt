import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { LoginUsuarioDto } from '../../../core/models/login-usuario.dto';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  usuario!: LoginUsuarioDto;
  recordarme = false;

  constructor(private router: Router, private auth: AuthenticationService) {
    this.usuario = new LoginUsuarioDto();
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

    this.auth.nuevoUsuario(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        Swal.close();
        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
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

}
