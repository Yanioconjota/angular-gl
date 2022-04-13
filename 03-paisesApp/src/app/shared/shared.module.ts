import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
//Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { ErrorComponent } from './error/error.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ErrorComponent,
    SugerenciasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    ErrorComponent,
    SugerenciasComponent
  ]
})
export class SharedModule { }
