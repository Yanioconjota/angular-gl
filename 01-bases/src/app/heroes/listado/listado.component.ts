import { Component } from '@angular/core';
import { Hero } from 'src/app/models/heroe.model';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent {

  titulo: string = 'Listado Héroes';
  
  ogHeroes: Hero[] = [
    { 
      name: 'Batman',
      age: 45,
      alterEgo: 'Bruce Wayne'
    },
    { 
      name: 'Superman',
      age: 42,
      alterEgo: 'Clark Kent'
    },
    { 
      name: 'Wonder Woman',
      age: 317,
      alterEgo: 'Diana Prince'
    },
    { 
      name: 'Blue Beetle',
      age: 37,
      alterEgo: 'Ted Kord'
    },
    { 
      name: 'Green Lantern',
      age: 36,
      alterEgo: 'Hal Jordan'
    }
  ];

  heroes = [...this.ogHeroes];

  heroesBorrados: never | Hero[] = [];

  heroeBorrado: string = '';

  borrarHeroe (i: number): void {
    const heroeBorrado = this.heroes.splice(i, 1);
    this.heroesBorrados.push(heroeBorrado[0]);
    this.heroeBorrado = '';
  };

  borrarUltimoHeroe () {
    let hero = this.heroes.shift();
    this.heroeBorrado = hero?.name || '';
  };

  reset () {
    this.heroes = [...this.ogHeroes];
    this.heroesBorrados = [];
    this.heroeBorrado = '';
  };

}
