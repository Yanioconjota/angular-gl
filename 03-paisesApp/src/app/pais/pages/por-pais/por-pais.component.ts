import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
        .subscribe({
          next: (paises: Pais[]) => {
            console.log(paises);
            this.paises = paises;
          },
          error: (err: any) => {
            console.log('Error');
            console.info(err);
            this.hayError = true;
            this.paises = [];
          }
        });
  }

  sugerencias(termino: string) {
    //Elimina el error cuando empezamos a escribir
    this.hayError = false;
    console.log('sugerencias: ', termino);
  }

}
