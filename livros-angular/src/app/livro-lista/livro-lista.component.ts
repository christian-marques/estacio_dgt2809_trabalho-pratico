import { Component, OnInit } from '@angular/core';
import { ControleLivrosService } from '../services/controle-livros.service';
import { Livro } from '../models/livro';
import { Editora } from '../models/editora';
import { ControleEditoraService } from '../services/controle-editora.service';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})

export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];
  editoras: Editora[] = [];
  constructor(private controleLivros: ControleLivrosService,
    private controleEditoras: ControleEditoraService) { }

  ngOnInit(): void {
    this.livros = this.controleLivros.obterLivros();
    this.editoras = this.controleEditoras.getEditoras();
    console.log("Livros carregados: ", this.livros);
    console.log("Editoras carregadas: ", this.editoras);
  }

  getNomeEditora(codEditora: number): string {
    return this.controleEditoras.getNomeEditora(codEditora);
  }

  getNomeAutor(codigo: number): string[] {
    return this.controleLivros.getNomeAutor(codigo);
  }
}
