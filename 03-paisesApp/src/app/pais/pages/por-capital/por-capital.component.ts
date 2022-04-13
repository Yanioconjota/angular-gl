import { Component } from '@angular/core';
import { TipoSugerencia } from 'src/app/types/tipoSugerencia.types';
import { Pais } from '../../interfaces/pais.interface';
import { Ui } from '../../interfaces/ui.interface';
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
  paisesSugeridos: Pais[] = [];
  placeholder: string = '';
  loading: boolean = false;
  mostrarSugerencias: boolean = false;
  tipoSugerencia: string = TipoSugerencia.capital;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    if (termino === '') { return; }
    this.loading = true;
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
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
            //console.info(err);
            this.hayError = true;
            this.paises = [];
          }
        });
  }

  sugerencias(e: Ui) {
    this.hayError = e.error;
    this.loading = e.loading;
    this.termino = e.termino;
    this.mostrarSugerencias = true;
  }

}
