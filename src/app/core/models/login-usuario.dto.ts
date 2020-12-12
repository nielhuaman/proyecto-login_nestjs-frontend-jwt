import { LoginUsuarioI } from './../interfaces/loginUsuarioI';
export class LoginUsuarioDto implements LoginUsuarioI{

  email!: any;
  password!: string;
  tipoUsuario!: string;

  // constructor(email: string, password: string, tipoUsuario: string) {
  //   this.email = email;
  //   this.password = password;
  //   this.tipoUsuario = tipoUsuario;
  // }
  constructor(){}

}
