import { Component, Input } from '@angular/core';
import { DbzFighter } from 'src/app/interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-fighterz',
  templateUrl: './fighterz.component.html',
  styles: [
  ]
})
export class FighterzComponent {

  //@Input() dbzFighterZ: DbzFighter[] = [];

  get dbzFighterZ() {
    return this.dbzService.dbzFighterZ;
  }

  constructor( private dbzService: DbzService) {}

}
