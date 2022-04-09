import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})

export class ContadorComponent {

  titulo: string = 'Contador App';
  numero: number = 10;

  base: number = 10;

  acumular (valor: number) { this.numero += valor };

  reset () { 
    this.base = 10;
    this.numero = this.base;
  }
}