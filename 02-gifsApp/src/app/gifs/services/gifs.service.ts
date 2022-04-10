import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  get history() {
    return [...this._history];
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLowerCase();
    
    //nos aseguramos de no buscar términos repetidos
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      //returnamos solo los últimos 10 valores agregados
      this._history = this._history.splice(0, 10);
    }

  }
}
