import { Component } from '@angular/core';

@Component({
  selector: 'app-first-example',
  templateUrl: './first-example.component.html',
  styles: [
  ]
})
export class FirstExampleComponent {

  nombre: string = 'general morgan';
  subtitulo: string = 'VictoRia en el caníl';
  contenido: string = 'Alzad el hocico con bravura, el caníl es nuestro y ningún perro desconocido correrá en sus planicies, que sean firmes nuestras pisadas y pavorosos nuestros ladridos!';
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
