import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = 'Homero';
  numero: number = 1000;
  obj = {
    nombre: 'Tony',
    apellido: 'Soprano'
  };

  clg() {
    console.log(this.nombre);
    console.log(this.numero);
    console.log(this.obj);
  }
}
