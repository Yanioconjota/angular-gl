import { Component, OnInit } from '@angular/core';
import { DbzFighter } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  originalRoster: DbzFighter[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 9000,
    },
    {
      name: 'Krillin',
      power: 8500,
    }
  ];

  dbzFighterZ: DbzFighter[] = [...this.originalRoster];

  titulo: string = 'Dragon Ball Z';

  dbzFighter: DbzFighter = {
    name: '',
    power: 0,
  };

  reset() {
    this.dbzFighterZ = [...this.originalRoster];
    this.dbzFighter = {
      name: '',
      power: 0,
    }
  }

  addNewDbzFighter(newDbzFighter: DbzFighter) {
    this.dbzFighterZ.push(newDbzFighter);
  };

}
