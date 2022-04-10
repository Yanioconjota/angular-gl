import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'WQY9UC0spB6ehbMFIiMSB20VixpqTJxL';

  private _history: string[] = [];

  private limit: number = 10;

  get history() {
    return [...this._history];
  }

  constructor( private http: HttpClient ) {}

  buscarGifs(query: string = '') {

    query = query.trim().toLowerCase();
    
    //nos aseguramos de no buscar términos repetidos
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      //returnamos solo los últimos 10 valores agregados
      this._history = this._history.splice(0, 10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=${this.limit}&api_key=${this.apiKey}`)
        .subscribe(( resp:any ) => {
          console.log(resp.data);
        })

  }
}
