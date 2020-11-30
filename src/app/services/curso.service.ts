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

  
  
}
