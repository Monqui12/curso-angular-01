import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  private dbzService = inject(DbzService);

  get personajes(){
    return signal(this.dbzService.personajes);
  }

  constructor(){}
}
