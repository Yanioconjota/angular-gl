import { CommonModule } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

// importar locales
import localeEsAr from '@angular/common/locales/es-AR';
import localeEsFr from '@angular/common/locales/fr';

//custom modules
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Components
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeEsAr, 'es-Ar');
registerLocaleData(localeEsFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    CommonModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Ar' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'ARS' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
