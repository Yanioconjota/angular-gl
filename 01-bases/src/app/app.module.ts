import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';

// importar locales
import localePy from '@angular/common/locales/es-PY';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import localeEsAr from '@angular/common/locales/es-AR';

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localePy, 'es');
registerLocaleData(localePt, 'pt');
registerLocaleData(localeEn, 'en');
registerLocaleData(localeEsAr, 'es-Ar');

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Ar' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
