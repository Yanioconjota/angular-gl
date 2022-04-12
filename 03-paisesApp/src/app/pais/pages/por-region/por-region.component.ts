import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
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
  regionActiva: string = 'Africa';
  loading: boolean = false;

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
            console.log(paises);
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

}
