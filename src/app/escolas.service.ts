import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escola } from './models/escola';

@Injectable({
  providedIn: 'root'
})
export class EscolasService {
  private jsonUrl = 'assets/dados.json';
  
  constructor(private http: HttpClient) { }

  getEscolas(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  // Adicione outros métodos conforme necessário
}