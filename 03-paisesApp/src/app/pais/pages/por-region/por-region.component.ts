import { Component, OnInit } from '@angular/core';
import { Pais, RegionalBloc } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  placeholder: string = '';
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  bloqueRegiones: RegionalBloc[] = [
    { symbol: 'EU', name: 'European Union' },
    { symbol: 'EFTA', name: 'European Free Trade Association' },
    { symbol: 'CARICOM', name: 'Caribbean Community' },
    { symbol: 'PA', name: 'Pacific Alliance' },
    { symbol: 'AU', name: 'African Union' },
    { symbol: 'USAN', name: 'Union of South American Nations' },
    { symbol: 'EEU', name: 'Eurasian Economic Union' },
    { symbol: 'AL', name: 'Arab League' },
    { symbol: 'ASEAN', name: 'Association of Southeast Asian Nations' },
    { symbol: 'CAIS', name: 'Central American Integration System' },
    { symbol: 'CEFTA', name: 'Central European Free Trade Agreement' },
    { symbol: 'NAFTA', name: 'North American Free Trade Agreement' },
    { symbol: 'SAARC', name: 'South Asian Association for Regional Cooperation' }
  ]
  regionActiva: string = 'Africa';
  bloqueActivo: string = 'EU';
  loading: boolean = false;
  selectRegion: boolean = true;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.activarRegion(this.regionActiva);
    
  }

  activarRegion(region: string) {
    this.loading = true;
    this.regionActiva = region;
    this.paisService.buscarRegion(region)
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
            this.paises = [];
          }
        });
  }

  activarBloque(bloque: string) {
    this.loading = true;
    this.bloqueActivo = bloque;
    this.paisService.buscarBloque(bloque)
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
            this.paises = [];
          }
        });
    
  }

  selector(): boolean {
    if (this.selectRegion === true) {
      this.activarBloque(this.bloqueActivo);
    } else {
      this.activarRegion(this.regionActiva);
    }
    return this.selectRegion = !this.selectRegion;
  }

}
