import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
  heroesBorrados: string[] = [];
  borrarHeroe():void{
    const borrado = this.heroes.shift();
    borrado? this.heroesBorrados.push(borrado) : '';
  }
}
