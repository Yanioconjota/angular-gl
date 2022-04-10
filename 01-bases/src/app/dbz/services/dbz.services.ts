import { Injectable } from "@angular/core";
import { DbzFighter } from "src/app/interfaces/dbz.interface";

@Injectable()
export class DbzService {

  //lo convertimos en privado con la palabra reservada private y por convención agregamos el guión bajo como prefijo
  private _originalRoster: DbzFighter[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 9000,
    },
    {
      name: 'Krillin',
      power: 8500,
    }
  ];

  //retornamos un array nuevo con el contenido privado, este es accesible dentro de este servicio

  get dbzFighterZ(): DbzFighter[] {
    return [...this._originalRoster];
  }

  constructor() {
    console.log('dbz service connected!');
  }

  //pusheamos al array privado y es el getter quien se encarga de redibujarlo al momento de que se actualice
  addNewDbzFighter(newDbzFighter: DbzFighter) {
    this._originalRoster.push(newDbzFighter);
  };
}