import { UsuarioI } from '../interfaces/usuarioI';

export class UsuarioDto implements UsuarioI{
  codigo!: string;
  tipoUsuario!: string;
  usuario!: string;
  apellidoPaterno!: string;
  apellidoMaterno!: string;
  nombres!: string;
  edad!: number;
  sexo!: string;

  constructor(){
  }
}
