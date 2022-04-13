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
  paisesSugeridos: Pais[] = [];
  placeholder: string = '';
  loading: boolean = false;
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    if (termino === '') { return }
    this.loading = true;
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
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
    if (termino === '') { return }
    //Elimina el error cuando empezamos a escribir
    this.hayError = false;
    this.loading = false;
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.paisService.buscarPais(termino)
        .subscribe({
          next: (paises: Pais[]) => {
            console.log(paises);
            this.paisesSugeridos = paises.splice(0,5);
          },
          error: (err: any) => {
            this.paisesSugeridos = [];
            //console.log(err);
          }
        })
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }

}
