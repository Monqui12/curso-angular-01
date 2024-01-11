import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-contador',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    template: `
        <h1> {{ titulo }} </h1>
        <h3>La base es {{base}}</h3>
        <button (click)="acumular(-base)">-{{base}}</button>
        <span> {{ numero }} </span>
        <button (click)="acumular(base)">+{{base}}</button>
    `
})
export class ContadorComponent {
    public titulo:string = 'Contador app';
    public numero:number = 0;
    public base:number = 5;

    acumular( valor:number ){
        this.numero += valor;
    }
}