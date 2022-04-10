import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzFighter } from 'src/app/interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styles: [
  ]
})
export class AddNewComponent {
  
  @Input() dbzFighter: DbzFighter = {
    name: '',
    power: 0
  };

  @Input() dbzFighterZ: DbzFighter[] = [];

  //@Output() onAddNewDbzFighter: EventEmitter<DbzFighter> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  agregar() {
    if (this.dbzFighter.name.trim().length === 0) { return }

    //this.onAddNewDbzFighter.emit(this.dbzFighter);
    this.dbzService.addNewDbzFighter(this.dbzFighter);
    this.dbzFighter = {
      name: '',
      power: 0,
    }
  };

}
