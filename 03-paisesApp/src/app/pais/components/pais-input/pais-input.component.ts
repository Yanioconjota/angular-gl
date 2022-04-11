import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  termino: string = '';

  @Output()
  onBuscar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  buscar() {
    this.onBuscar.emit(this.termino);
  }

}
