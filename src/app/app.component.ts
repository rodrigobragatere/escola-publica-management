import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { Escola} from './models/escola';
import { Turma} from './models/turma';
import { FormsModule } from '@angular/forms'; // Importando FormsModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Atualiza para usar o arquivo SCSS
})
export class AppComponent implements OnInit {
  escolas: Escola[] = [];
  turmas: Turma[] = [];
  novaEscola = { nome: '', endereco: '' };
  novaTurma = { nome: '', serie: '',escolaId:0 };

  constructor(private http: HttpClient) {}

  cadastrarEscola() {
    if (this.novaEscola.nome && this.novaEscola.endereco) {
      this.escolas.push({ ...this.novaEscola });
      this.novaEscola = { nome: '', endereco: '' }; // Limpa o formulário
    }
  }

  cadastrarTurma() {
    if (this.novaTurma.nome && this.novaTurma.serie) {
      this.turmas.push({ ...this.novaTurma });
      this.novaTurma = { nome: '', serie: '',escolaId:0  }; // Limpa o formulário
    }
  }

  ngOnInit() {
    this.http.get<{ escolas: Escola[], turmas: Turma[] }>('/assets/dados.json')
      .subscribe(data => {
        this.escolas = data.escolas;
        this.turmas = data.turmas;
      });
  }
}