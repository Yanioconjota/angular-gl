import { Component, Input } from '@angular/core';
import { DbzFighter } from 'src/app/interfaces/dbz.interface';

@Component({
  selector: 'app-fighterz',
  templateUrl: './fighterz.component.html',
  styles: [
  ]
})
export class FighterzComponent {

  @Input() dbzFighterZ: DbzFighter[] = [];

}
