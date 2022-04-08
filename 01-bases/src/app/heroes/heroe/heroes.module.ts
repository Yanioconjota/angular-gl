import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe.component';
import { ListadoComponent } from '../listado/listado.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  imports: [ CommonModule ],
  exports: [
    HeroeComponent,
    ListadoComponent
  ],
  providers: [],
})
export class HeroesModule {}