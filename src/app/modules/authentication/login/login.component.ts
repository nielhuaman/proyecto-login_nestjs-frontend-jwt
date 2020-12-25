import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFireFunctions } from '@angular/fire/functions';

import Swal from 'sweetalert2';

import { LoginUsuarioDto } from '../../../core/models/login-usuario.dto';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: LoginUsuarioDto;
  recordarme = false;

  constructor(private router: Router, private auth: AuthenticationService, private fns: AngularFireFunctions) {
    this.usuario = new LoginUsuarioDto();
  }


  ngOnInit(): void {

    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login(form: NgForm): void {

    console.log('hola clin ek login');
    const hola = this.fns.httpsCallable('sayHello')({ nombre: 'rosmery' }).pipe(first()).subscribe(
      resp => {
        console.log({ resp });
      }, err => {
        console.error({ err });
      }
    );





    if (form.invalid) { return; }


    Swal.fire({
      allowOutsideClick: false,
      title: 'Cargando',
      text: 'Espere por favor ...',
      icon: 'info'
    });
    Swal.showLoading();

    this.auth.login(this.usuario)
      .subscribe(resp => {
        Swal.close();
        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }
        this.router.navigate(['dashboard']);
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          title: 'Error al autenticar!',
          text: err.error.error.message,
          icon: 'error'
        });
      });
  }

}
