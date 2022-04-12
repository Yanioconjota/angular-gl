import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais, Translation } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  //usamos signo de exclamación para inicializar la variable con un valor null
  pais!: Pais;
  translations!: Translation[];
  languages!: any;
  currencies!:any;

  //Usamos activatedRoute para suscribirnos a cualquier cambio de la url
  constructor(private paisService: PaisService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //obtenemos el id de la desestructuración de params
    //el id lo definimos en app-routing.module y en la respuesta de nuestra petición viene como cca2
    
    //usamos el operador switchMap para simplificar los subscribes a nuestros observables, ya que el id viene de los params pero luego al llamar a buscarPaisPorCodigo tendríamos otro observable
    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.paisService.buscarPaisPorCodigo(id)),
          tap(console.log)
        )
        .subscribe(pais => {
          this.pais = pais[0];
          this.translations = Object.values( this.pais.translations );
          
          this.languages = Object.keys(this.pais.languages)
              .map((key) => (
                { type: key, value: this.pais.languages[key]}
              ));
          this.currencies = Object.values( this.pais.currencies );
          console.log(this.currencies);
        });

  }

}
