import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  termino: string = '';

  @Output()
  onBuscar: EventEmitter<string> = new EventEmitter();

  //onDebounce emitirá el valor que recibe el evento (input) al ejecutar el método teclaPresionada()
  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  //debouncer es un observable del tipo subject que usaremos para subscribirnos a lo que retorna dicho observable después de cierto tiempo
  debouncer: Subject<string> = new Subject();

  constructor() { }

  //usamos el ciclo de vida de ngOnInit para inicializar el método debounceTime de RxJS, es este el que nos permite hacer el subscribe después del tiempo que especificamos como parámetro

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
      this.onDebounce.emit(valor);
    });
  }

  buscar(): void {
    this.onBuscar.emit(this.termino);
  }

  //recibe el evento del input a través de [(ngModel)] y es almacenado en un observable del tipo Subject "debouncer"
  teclaPresionada(): void {
    this.debouncer.next(this.termino);
  }
}
