import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Matricula } from '../models/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  matriculaURL = environment.matriculaURL;
  constructor(private httpClient: HttpClient) { }

  // public listar(): Observable<Matricula[]>{
  //   return this.httpClient.get<Matricula[]>(`${this.matriculaURL}`);
  // }
  // public detail(id: number):Observable<Matricula>{
  //   return this.httpClient.get<Matricula>(`${this.matriculaURL}/${id}`);
  // }
  // public save(matricula: Matricula): Observable<any> {
  //   return this.httpClient.post<any>(`${this.matriculaURL}`, matricula);
  // }
  // public delete(id: number): Observable<any> {
  //   return this.httpClient.delete<any>(`${this.matriculaURL}/${id}`);
  // }
  // public update(id: number, matricula: Matricula): Observable<any> {
  //   return this.httpClient.put<any>(`${this.matriculaURL}/${id}`, matricula);
  // }
}
