import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioDto } from '../../../../core/models/usuario.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../core/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit {
  forma: FormGroup;
  usuario: UsuarioDto;
  valorIdUser: string;
  valorEmailUser:string;
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
    this.valorIdUser= localStorage.getItem('idUser')||'';
    this.valorEmailUser= localStorage.getItem('userEmail')||'';
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

    Swal.fire({
      allowOutsideClick: false,
      title: 'Cargando',
      text: 'Espere por favor ...',
      icon: 'info'
    });
    Swal.showLoading();

    console.log("valor de valoriduse");
    console.log(this.valorIdUser);
    this.usuarioService.detail(this.valorIdUser).subscribe(
      data => {
        this.usuario.codigo = data.codigo;
        this.usuario.apePaterno=data.apePaterno;
        this.usuario.apeMaterno=data.apeMaterno;
        this.usuario.nombres=data.nombres;
        this.usuario.edad=data.edad;
        this.usuario.email=data.email;
        this.usuario.idTipoUsuario=data.idTipoUsuario;
        this.usuario.sexo=data.sexo;

        this.forma.controls['codigo'].setValue(this.valorIdUser);
        this.forma.controls['tipoUsuario'].setValue(this.usuario.idTipoUsuario);
        this.forma.controls['apellidoPaterno'].setValue(this.usuario.apePaterno);
        this.forma.controls['apellidoMaterno'].setValue(this.usuario.apeMaterno);
        this.forma.controls['nombre'].setValue(this.usuario.nombres);
        this.forma.controls['edad'].setValue(this.usuario.edad);
        this.forma.controls['sexo'].setValue(this.usuario.sexo);
        this.forma.controls['correo'].setValue(this.valorEmailUser);

        Swal.close();
      },
      err => {
        //this.volver();
        console.log("error en perfil");
        console.log(err);
        this.forma.controls['codigo'].setValue(this.valorIdUser);
        this.forma.controls['correo'].setValue(this.valorEmailUser);
        Swal.close();
      }
    );
  }

  actualizar(): void {
    const valorIdUser= Number(localStorage.getItem('idUser'));
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
    this.usuarioService.crearUsuario(this.usuario).subscribe(
      data =>{
        console.log('exito en actualizar');
        this.volver();
      },err =>{
        console.log('error al actualizar');
      }
    );
  }

  volver(): void {
    this.router.navigate(['dashboard/user/list']);
  }

}
