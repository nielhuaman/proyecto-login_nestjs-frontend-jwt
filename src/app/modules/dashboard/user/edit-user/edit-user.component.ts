import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { UsuarioDto } from 'src/app/core/models/usuario.dto';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  forma: FormGroup;
  usuario: UsuarioDto;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private usuarioService: UserService, private router: Router) {
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

  get tipoUsuarioNoValido(): boolean {
    const campo = this.forma.get('tipoUsuario');
    // return (campo === null) ? false : campo?.invalid && campo.touched;
    return (campo === null) ? false : campo?.invalid && campo.touched;
  }

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

  ngOnInit(): void {
    console.log('llego a edit');

    Swal.fire({
      allowOutsideClick: false,
      title: 'Cargando',
      text: 'Espere por favor ...',
      icon: 'info'
    });
    Swal.showLoading();

    const codigo = this.activatedRoute.snapshot.params.id;
    console.log('el codigo es');
    console.log(codigo);
    this.usuarioService.detail(codigo).subscribe(
      data => {
        this.usuario.codigo = data.codigo;
        this.usuario.apePaterno=data.apePaterno;
        this.usuario.apeMaterno=data.apeMaterno;
        this.usuario.nombres=data.nombres;
        this.usuario.edad=data.edad;
        this.usuario.email=data.email;
        this.usuario.idTipoUsuario=data.idTipoUsuario;
        this.usuario.sexo=data.sexo;

        this.forma.controls['codigo'].setValue(data.codigo);
        this.forma.controls['tipoUsuario'].setValue(data.idTipoUsuario);
        this.forma.controls['apellidoPaterno'].setValue(data.apePaterno);
        this.forma.controls['apellidoMaterno'].setValue(data.apeMaterno);
        this.forma.controls['nombre'].setValue(data.nombres);
        this.forma.controls['edad'].setValue(data.edad);
        this.forma.controls['sexo'].setValue(data.sexo);
        this.forma.controls['correo'].setValue(data.email);

        Swal.close();
      },
      err => {
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['dashboard/user/list']);
  }

  actualizar(): void {

    // if (this.forma.invalid) {

    //   return Object.values(this.forma.controls).forEach(control => {

    //     if (control instanceof FormGroup) {
    //       Object.values(control.controls).forEach(control => control.markAsTouched());
    //     } else {
    //       control.markAsTouched();
    //     }


    //   });
    // }



    // const constUsuarioString = JSON.stringify(this.usuario);
    // const data = JSON.parse(constUsuarioString);
    const codigo = this.activatedRoute.snapshot.params.id;
    this.usuario.codigo = this.forma.get('codigo')?.value;
    this.usuario.idTipoUsuario = this.forma.get('tipoUsuario')?.value;
    this.usuario.apePaterno = this.forma.get('apellidoPaterno')?.value;
    this.usuario.apeMaterno = this.forma.get('apellidoMaterno')?.value;
    this.usuario.nombres = this.forma.get('nombre')?.value;
    this.usuario.edad = this.forma.get('edad')?.value;
    this.usuario.sexo = this.forma.get('sexo')?.value;
    this.usuario.email = this.forma.get('correo')?.value;

    console.log("usario actualizdo a enviar");
    console.log(this.usuario);
    this.usuarioService.updateUsuario(this.usuario).subscribe(
      data =>{
        console.log('exito en actualizar');
        this.volver();
      },err =>{
        console.log('error al actualizar');
      }
    );

  }

}
