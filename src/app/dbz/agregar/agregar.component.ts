import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { FormsModule } from '@angular/forms';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  private dbzService = inject(DbzService);

  @Input() nuevo = signal<Personaje>({
    nombre: '',
    poder: 0
  });

  constructor(){}
  
  agregar(){
    if(this.nuevo().nombre.trim().length === 0){return;}
    this.dbzService.agregarPersonaje( this.nuevo() );
    this.nuevo = signal<Personaje>({
      nombre: '',
      poder: 0
    })
  }

}
