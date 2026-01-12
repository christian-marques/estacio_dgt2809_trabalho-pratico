import { Component, OnInit } from '@angular/core';
import { ControleLivrosService } from '../services/controle-livros.service';
import { ControleEditoraService } from '../services/controle-editora.service';
import { Livro } from '../models/livro';
import { Editora } from '../models/editora';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public livros: Livro[] = [];
  public editoras: Editora[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number): string =>
    this.servEditora.getNomeEditora(codEditora);
}