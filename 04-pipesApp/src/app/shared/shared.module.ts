import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../modules/prime-ng/prime-ng.module';
import { FirstExampleComponent } from './pages/first-example/first-example.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';



@NgModule({
  declarations: [
    CapitalizePipe,
    MenuComponent,
    FirstExampleComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ]
})
export class SharedModule { }
