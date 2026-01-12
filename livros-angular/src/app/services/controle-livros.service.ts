import { Injectable } from '@angular/core';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  private livros: Livro[] = [
    new Livro(
      1,
      1,
      'Harry Potter e as Relíquias da Morte',
      'Último livro da saga Harry Potter, no qual Harry, Rony e Hermione partem em uma jornada para destruir as Horcruxes e enfrentar Voldemort.',
      ['J. K. Rowling']
    ),
    new Livro(
      2,
      2,
      'Percy Jackson e os Olimpianos: O Último Olimpiano',
      'Percy Jackson enfrenta a batalha final contra Cronos para proteger o Olimpo, em um confronto decisivo que define o destino dos deuses e dos semideuses.',
      ['Rick Riordan']
    ),
    new Livro(
      3,
      3,
      'O Morro dos Ventos Uivantes',
      'Clássico da literatura inglesa que narra uma história intensa de amor, obsessão e vingança entre as famílias Earnshaw e Linton.',
      ['Emily Brontë']
    )
  ];

  constructor() { }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros.length ? Math.max(...this.livros.map(l => l.codigo)) : 0; 
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const idx = this.livros.findIndex(l => l.codigo === codigo);
    if (idx >= 0) {
      this.livros.splice(idx, 1);
    }
  }

  getNomeAutor(codigo: number): string[] {
    const encontrados = this.livros.filter(l => l.codigo === codigo);
    return encontrados.length ? encontrados[0].autores : [];
  }
}
