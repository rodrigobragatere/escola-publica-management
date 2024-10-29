import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { Escola } from './models/escola';
import { Turma } from './models/turma';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html', // Verifique se este caminho está correto
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  escolas: Escola[] = [];
  turmas: Turma[] = [];
  novaEscola = { id: '', nome: '', endereco: '' };
  novaTurma = { id: '', nome: '', serie: '', escolaId: '' };

  constructor(private http: HttpClient) {}

  cadastrarEscola() {
    if (this.novaEscola.nome && this.novaEscola.endereco) {
      this.escolas.push({ ...this.novaEscola });
      this.novaEscola = { id: '', nome: '', endereco: '' }; // Limpa o formulário
    }
  }

  cadastrarTurma() {
    if (this.novaTurma.nome && this.novaTurma.serie) {
      this.turmas.push({ ...this.novaTurma });
      this.novaTurma = { id: '', nome: '', serie: '', escolaId: '' }; // Limpa o formulário
    }
  }

  excluirEscola(id: string) {
    this.escolas = this.escolas.filter(escola => escola.id !== id);
  }

  excluirTurma(id: string) {
    this.turmas = this.turmas.filter(turma => turma.id !== id);
  }

  ngOnInit() {
    this.http.get<{ escolas: Escola[], turmas: Turma[] }>('/assets/dados.json')
      .subscribe(data => {
        this.escolas = data.escolas;
        this.turmas = data.turmas;
      });
  }
}