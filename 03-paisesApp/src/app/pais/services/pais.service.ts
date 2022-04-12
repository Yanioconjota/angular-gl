import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = `https://restcountries.com/v3.1`;

  //este getter retorna los params "fields" que se concatenan al pedido HTTP para optimizar la respuesta, ya que solo traerá los valores especificados
  get httpParams () {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http:HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]> {
    
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });

  }

  buscarCapital(termino: string): Observable<Pais[]> {
    
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });

  }

  buscarRegion(termino: string): Observable<Pais[]> {
    
    const url = `${this.apiUrl}/region/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });

  }

  buscarBloque(termino: string): Observable<Pais[]> {
    
    const url = `https://restcountries.com/v2/regionalbloc/${termino}`;

    return this.http.get<Pais[]>(url, { params: this.httpParams });

  }

  buscarPaisPorCodigo(id: string): Observable<Pais> {
    
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Pais>(url);

  }
}
