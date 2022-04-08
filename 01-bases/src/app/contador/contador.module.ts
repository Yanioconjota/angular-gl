import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  imports: [ CommonModule, FormsModule ],
  exports: [ContadorComponent],
  providers: [],
})
export class ContadorModule {}