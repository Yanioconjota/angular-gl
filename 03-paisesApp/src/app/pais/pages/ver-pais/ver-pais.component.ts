import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  //Usamos activatedRoute para suscribirnos a cualquier cambio de la url
  constructor(private paisService: PaisService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //obtenemos el id de la desestructuración de params
    //el id lo definimos en app-routing.module y en la respuesta de nuestra petición viene como cca2
    
    //usamos el operador switchMap para simplificar los subscribes a nuestros observables, ya que el id viene de los params pero luego al llamar a buscarPaisPorCodigo tendríamos otro observable
    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.paisService.buscarPaisPorCodigo(id))
        )
        .subscribe(resp => {
          console.log(resp);
        })

  }

}
