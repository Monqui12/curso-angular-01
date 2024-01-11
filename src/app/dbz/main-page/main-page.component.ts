import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from '../personajes/personajes.component';
import { Personaje } from '../interfaces/dbz.interfaces';
import { AgregarComponent } from '../agregar/agregar.component';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule, CommonModule, PersonajesComponent, AgregarComponent],
  providers:[DbzService],
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  nuevo= signal<Personaje> ( {
    nombre: 'Trunks',
    poder: 0
  });
  
  constructor( ){}
}
