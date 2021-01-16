import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioDto } from '../../models/usuario.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarioURL=environment.usuarioURL;
  // constructor(private firestore: AngularFirestore) { }
  headers = new HttpHeaders();
  constructor(private httpClient: HttpClient){

  }

  crearUsuario(data: UsuarioDto) {
    // return this.firestore.collection('usuarios').add(data);
    // console.log("el valor del token es");
    // console.log(valorToken);
    // var headers_object= new HttpHeaders({'Content-Type':'application/json','Authorization':"Bearer "+valorToken});
    // const httpOptions = {
    //   headers: headers_object
    // };
    // console.log("valor de httpOptions");
    // console.log(httpOptions);

    // this.headers.append("Content-Type","application/json");
    // this.headers.append("Authorization","Bearer "+valorToken);

    return this.httpClient.post<any>(`${this.usuarioURL}`,data);
  }

  getListUsuarios() {
    // return this.firestore.collection('usuarios').snapshotChanges();
    return this.httpClient.get<UsuarioDto[]>(`${this.usuarioURL}`);
  }

  updateUsuario( data: any) {
    // return this.firestore.collection('usuarios').doc(id).update(data);
    return this.httpClient.post<any>(`${this.usuarioURL}`, data);
  }

  deleteUsuario(id: any) {
    // return this.firestore.collection('usuarios').doc(id).delete();
    return this.httpClient.delete<any>(`${this.usuarioURL}${id}`);
  }

  detail(codigo: string ) {
    return this.httpClient.get<UsuarioDto>(`${this.usuarioURL}${codigo}`);
  }
}
