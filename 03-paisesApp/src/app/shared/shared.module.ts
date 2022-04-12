import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
//Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
