import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { UserService } from '../../../../core/services/user/user.service';
import { UsuarioDto } from '../../../../core/models/usuario.dto';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  forma: FormGroup;
  usuario: UsuarioDto;



  constructor(private fb: FormBuilder, private usuarioService: UserService) {
    this.forma = this.fb.group({
      codigo: [''],
      tipoUsuario: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellidoPaterno: ['', [Validators.required]],
      apellidoMaterno: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(80)]],
      sexo: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });

    this.usuario = new UsuarioDto();
  }

  ngOnInit(): void {
  }

  // get codigoNoValido(): boolean {
  //   const campo = this.forma.get('codigo');
  //   return (campo === null) ? false : campo.invalid && campo.touched;
  // }

  get tipoUsuarioNoValido(): boolean {
    const campo = this.forma.get('tipoUsuario');
    // return (campo === null) ? false : campo?.invalid && campo.touched;
    return (campo === null) ? false : campo?.invalid && campo.touched;
  }

  // get usuarioNoValido(): boolean {
  //   const campo = this.forma.get('usuario');
  //   return (campo === null) ? false : campo.invalid && campo.touched;
  // }

  get nombreNoValido(): boolean {
    const campo = this.forma.get('nombre');
    return (campo === null) ? false : campo.invalid && campo.touched;
  }

  get apellidoPaternoNoValido(): boolean {
    const campo = this.forma.get('apellidoPaterno');
    return (campo === null) ? false : campo.invalid && campo.touched;
  }

  get apellidoMaternoNoValido(): boolean {
    const campo = this.forma.get('apellidoMaterno');
    return (campo === null) ? false : campo.invalid && campo.touched;
  }

  get edadNoValido(): boolean {
    const campo = this.forma.get('edad');
    console.log(campo);
    return (campo === null) ? false : campo.invalid && campo.touched;
  }

  get sexoNoValido(): boolean {
    const campo = this.forma.get('sexo');
    return (campo === null) ? false : campo.invalid && campo.touched;
  }

  get correoNoValido(): boolean {
    const campo = this.forma.get('correo');
    return (campo === null) ? false : campo.invalid && campo.touched;
  }

  guardar(): void {


    // console.log(this.forma);

    if (this.forma.invalid) {

      return Object.values(this.forma.controls).forEach(control => {

        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }


      });
    }

    Swal.fire({
      allowOutsideClick: false,
      title: 'Cargando',
      text: 'Espere por favor ...',
      icon: 'info'
    });
    Swal.showLoading();

    this.usuario.idTipoUsuario = this.forma.get('tipoUsuario')?.value;
    this.usuario.apePaterno = this.forma.get('apellidoPaterno')?.value;
    this.usuario.apeMaterno = this.forma.get('apellidoMaterno')?.value;
    this.usuario.nombres = this.forma.get('nombre')?.value;
    this.usuario.edad = this.forma.get('edad')?.value;
    this.usuario.sexo = this.forma.get('sexo')?.value;
    this.usuario.email= this.forma.get('correo')?.value;
    this.usuario.codigo= this.forma.get('codigo')?.value;
    console.log("el usuario a enviar es");
    console.log(JSON.stringify(this.usuario));
    const constUsuarioString = JSON.stringify(this.usuario);
    const data = JSON.parse(constUsuarioString);


    this.usuarioService.crearUsuario(this.usuario).subscribe(
      data => {

        //this.router.navigate(['dashboard/curso/list']);
        console.log("creado con exito usiario");
        console.log(data);
        Swal.close();
        this.forma.reset();

      Swal.fire({
        icon: 'success',
        title: 'Usuario creado con exito.'
      });

       },
      err => {

    }
    );

    // this.usuarioService.crearUsuario(data).then(() => {
    //   console.log('creando usario');
    //   Swal.close();
    //   this.forma.reset();

    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Usuario creado con exito.'
    //   });


    // }, (error) => {
    //   console.log(error);
    //   Swal.fire({
    //     title: 'Error al autenticar!',
    //     text: error.error.error.message,
    //     icon: 'error'
    //   });
    // });


  }

}
