import { Component } from '@angular/core';
import { DbzFighter } from '../../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  /* Se puede refactorizar usando un getter
  originalRoster: DbzFighter[] = this.dbzService.originalRoster; 
  */

  titulo: string = 'Dragon Ball Z';

  dbzFighter: DbzFighter = {
    name: '',
    power: 0,
  };

  constructor() {}

}
