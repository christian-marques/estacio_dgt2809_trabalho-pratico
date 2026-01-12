import { Injectable } from '@angular/core';
import { Editora } from '../models/editora';



@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  
  private editoras: Editora[] = [
    new Editora(1, 'Rocco'),
    new Editora(2, 'Intrínseca'),
    new Editora(3, 'Martin Claret')
  ];

  constructor() { }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const encontrados = this.editoras.filter(e => e.codEditora === codEditora);
    return encontrados.length ? encontrados[0].nome : '';
  }

}
