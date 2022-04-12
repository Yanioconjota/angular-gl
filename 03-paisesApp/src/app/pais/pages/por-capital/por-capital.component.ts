import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  placeholder: string = '';
  loading: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.loading = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
        .subscribe({
          next: (paises: Pais[]) => {
            this.loading = false;
            //console.log(paises);
            this.paises = paises;
          },
          error: (err: any) => {
            this.loading = false;
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
    this.loading = false;
    //console.log('sugerencias: ', termino);
  }

}
