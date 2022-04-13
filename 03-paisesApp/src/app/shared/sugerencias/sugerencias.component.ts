import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pais } from 'src/app/pais/interfaces/pais.interface';
import { PaisService } from 'src/app/pais/services/pais.service';
import { Ui } from '../../pais/interfaces/ui.interface';
import { TipoSugerencia } from '../../types/tipoSugerencia.types';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styles: [
  ]
})
export class SugerenciasComponent {

  termino: string = '';

  ui: Ui = {
    error: false,
    loading: false,
    termino: ''
  };

  @Input()
  tipoSugerencia: string = '';

  @Input()
  mostrarSugerencias: boolean = false;

  @Input()
  paisesSugeridos: Pais[] = [];

  @Output()
  onSugerencia: EventEmitter<Ui> = new EventEmitter();

  @Output()
  onBuscarPaisesSugeridos: EventEmitter<string> = new EventEmitter();

  private tipoSugerenciaService (termino: string) {
    return this.tipoSugerencia === TipoSugerencia.pais ? this.paisService.buscarPais(termino) : this.paisService.buscarCapital(termino);
  }

  constructor(private paisService: PaisService) { }

  sugerencias(termino: string) {
    if (termino === '') { return }
    this.termino = this.ui.termino = termino;
    this.onSugerencia.emit(this.ui);
    this.mostrarSugerencias = true;
    this.buscar(this.termino);
  }

  buscar(termino: string) {
    this.tipoSugerenciaService(termino)
        .subscribe({
          next: (paises: Pais[]) => {
            //console.log(paises);
            this.ui.error = false;
            this.onSugerencia.emit(this.ui);
            this.paisesSugeridos = paises.splice(0,5);
          },
          error: (err: any) => {
            this.ui.error = true;
            this.onSugerencia.emit(this.ui);
            this.paisesSugeridos = [];
            console.log(err);
          }
        })
  }

  buscarSugerido(termino: string) {
    this.onBuscarPaisesSugeridos.emit(termino);
  }

}
