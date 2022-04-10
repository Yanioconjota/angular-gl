import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzService } from './services/dbz.services';

import { MainPageComponent } from './main-page/main-page.component';
import { FighterzComponent } from './fighterz/fighterz.component';
import { AddNewComponent } from './add-new/add-new.component';

@NgModule({
  declarations: [
    MainPageComponent,
    FighterzComponent,
    AddNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainPageComponent],
  providers: [DbzService]
})
export class DbzModule { }
