import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turma } from './models/turma';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  private apiUrl = 'http://localhost:3000/turmas'; // Ajuste conforme sua API

  constructor(private http: HttpClient) { }

  getTurmas(): Observable<Turma[]> {
    return this.http.get<Turma[]>(this.apiUrl);
  }

  // Adicione outros métodos conforme necessário
}
