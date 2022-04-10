import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'WQY9UC0spB6ehbMFIiMSB20VixpqTJxL';
  private url: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];
  private limit: number = 10;
  public results: Gif[] = [];
  
  get history() {
    return [...this._history];
  }

  constructor( private http: HttpClient ) {
    //en la inicialización del servicio si existe historial en localStorage lo retorna, sino un array vacío
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLowerCase();
    
    //nos aseguramos de no buscar términos repetidos
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      //returnamos solo los últimos 10 valores agregados
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    this.http.get<SearchGifsResponse>(`${this.url}/search?q=${query}&limit=${this.limit}&api_key=${this.apiKey}`)
        .subscribe( resp => {
          console.log(resp.data);
          this.results = resp.data;
          localStorage.setItem('results', JSON.stringify(this.results));
        })

  }
}
