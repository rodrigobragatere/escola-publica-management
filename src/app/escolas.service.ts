import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escola } from './models/escola';

@Injectable({
  providedIn: 'root'
})
export class EscolasService {
  private apiUrl = 'http://localhost:4200'; // Ajuste conforme sua API

  constructor(private http: HttpClient) { }

  getEscolas(): Observable<Escola[]> {
    return this.http.get<Escola[]>(this.apiUrl);
  }

  // Adicione outros métodos conforme necessário
}