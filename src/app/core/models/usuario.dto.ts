import { UsuarioI } from '../interfaces/usuarioI';

export class UsuarioDto implements UsuarioI{
  codigo!: string;
  idTipoUsuario!: string;
  apePaterno!: string;
  apeMaterno!: string;
  nombres!: string;
  edad!: number;
  email!: any;
  sexo!: string;

  constructor(){
  }
}
