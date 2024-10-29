import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { Escola} from './models/escola';
import { Turma} from './models/turma';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Atualiza para usar o arquivo SCSS
})
export class AppComponent implements OnInit {
  escolas: Escola[] = [];
  turmas: Turma[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ escolas: Escola[], turmas: Turma[] }>('/assets/dados.json')
      .subscribe(data => {
        this.escolas = data.escolas;
        this.turmas = data.turmas;
      });
  }
}