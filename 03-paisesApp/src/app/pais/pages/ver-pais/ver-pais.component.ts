import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.activatedRoute.params
      .subscribe( ({ id }) => {
        this.paisService.buscarPaisPorCodigo(id)
            .subscribe((pais:Pais)=> {
              console.log(pais);
            })
      });
  }

}
