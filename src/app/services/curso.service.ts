import { Curso } from './../models/curso';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursoURL = environment.cursoURL;

  constructor(private httpClient: HttpClient) { }

  public listacurso(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.cursoURL}`);
  }

  public detail(id: number): Observable<Curso> {
    return this.httpClient.get<Curso>(`${this.cursoURL}${id}`);
  }

  public save(curso: Curso): Observable<any> {
    return this.httpClient.post<any>(`${this.cursoURL}`, curso);
  }
  
  public update(id: number, curso: Curso): Observable<any> {
    return this.httpClient.put<any>(`${this.cursoURL}${id}`, curso);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.cursoURL}${id}`);
  }
}
