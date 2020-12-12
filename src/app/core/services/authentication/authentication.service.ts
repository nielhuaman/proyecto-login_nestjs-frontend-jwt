import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUsuarioDto } from '../../models/login-usuario.dto';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyAgPXWCwubawdKbIaKKKoqPjv9dc64VRCo';

  userToken: any;
  //crear usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]



  constructor(private http: HttpClient) {
    this.userToken = '';
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: LoginUsuarioDto): Observable<any> {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp => {

        const propiedadesResp = Object.getOwnPropertyNames(resp);
        const valorIdToken = (resp.hasOwnProperty('idToken')) ? Object.values(resp)[propiedadesResp.indexOf('idToken')] : '';
        this.guardarToken(valorIdToken);
        return resp;
      })
    );
  }

  nuevoUsuario(usuario: LoginUsuarioDto): Observable<any> {

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map((resp) => {

        // const propiedadesResp = Object.getOwnPropertyNames(resp);
        // const valorIdToken = (resp.hasOwnProperty('idToken')) ? Object.values(resp)[propiedadesResp.indexOf('idToken')] : '';
        // this.guardarToken(valorIdToken);
        return resp;
      })
    );

  }

  private guardarToken(idToken: string): void {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken(): string | null {

    this.userToken = (localStorage.getItem('token')) ? localStorage.getItem('token') : '';

    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }

  }
}
