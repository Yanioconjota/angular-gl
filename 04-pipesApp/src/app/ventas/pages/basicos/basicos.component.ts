import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'morgan';
  nombreUpper: string = 'MORGAN';
  nombreCompleto: string = 'MorGAN';

  fecha: Date = new Date();

}
