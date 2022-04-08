import { Component, OnInit } from '@angular/core';

export interface Heroe {
  nombre: string;
  edad: number;
}
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  value = 0;
  nombre: string = 'Ironman';
  edad: number = 45;

  

  heroes: Heroe[] = [
    {nombre: 'Ironman', edad: 45},
    {nombre: 'Captain America', edad: 75},
    {nombre: 'Spider-man', edad: 17}
  ];

  get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre ():string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarHeroe():void {
   
   if (this.value === (this.heroes.length - 1)) {
     this.value = 0;
   } else {
    this.value = this.value + 1
  }
  this.nombre = this.heroes[this.value].nombre;
  this.edad = this.heroes[this.value].edad;
   
  }

}
