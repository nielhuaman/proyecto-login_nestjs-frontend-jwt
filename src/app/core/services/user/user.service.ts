import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  crearUsuario(data: any) {
    return this.firestore.collection('usuarios').add(data);
  }

  getListUsuarios() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }

  updateUsuario(id: any, data: any) {
    return this.firestore.collection('usuarios').doc(id).update(data);
  }

  deleteUsuario(id: any) {
    return this.firestore.collection('usuarios').doc(id).delete();
  }
}
