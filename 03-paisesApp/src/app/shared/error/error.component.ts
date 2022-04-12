import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [
  ]
})
export class ErrorComponent {

  @Input()
  hayError: boolean = false;
  @Input()
  termino: string = '';

  constructor() { }

}
