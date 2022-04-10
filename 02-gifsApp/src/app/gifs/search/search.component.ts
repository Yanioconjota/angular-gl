import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  //Agregamos el signo de admiración para asegurarle a typeScript que no va a ser null
  //mas info: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

  //Asignándole el <HTMLInputElement> al ElementRef tenemos acceso a todas las ayudas del native element, como focus, type, value, ets
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  buscar() {

    const value = this.txtSearch.nativeElement.value;

    //si se hace una búsqueda en blanco no retornamos nada
    if ( value.trim().length === 0 ) { return; }

    this.gifsService.buscarGifs(value);

    this.txtSearch.nativeElement.value = '';
  }

}
