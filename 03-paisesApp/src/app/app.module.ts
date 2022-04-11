import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modules
import { SharedModule } from './shared/shared.module';
import { PaisesModule } from './paises/paises.module';
//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PaisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
