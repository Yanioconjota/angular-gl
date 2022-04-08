import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  value = 0;
  name: string = 'Ironman';
  age: number = 45;

  

  heroes: Hero[] = [
    {name: 'Ironman', age: 45},
    {name: 'Captain America', age: 75},
    {name: 'Spider-man', age: 17}
  ];

  get nombreCapitalizado():string {
    return this.name.toUpperCase();
  }

  obtenerNombre ():string {
    return `${this.name} - ${this.age}`;
  }

  cambiarHeroe():void {
   
   if (this.value === (this.heroes.length - 1)) {
     this.value = 0;
   } else {
    this.value = this.value + 1
  }
  this.name = this.heroes[this.value].name;
  this.age = this.heroes[this.value].age;
   
  }

}
