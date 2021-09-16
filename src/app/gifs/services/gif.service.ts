import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private apiKey: string = "MgXyXlI5QI2FLd0laaR5SeeBvnsigMUN";
  private _historial: string[] = [];
  private servicioURL: string = 'http://api.giphy.com/v1/gifs';

  public resultados: Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string = '') {
    let valor = query.trim().toLowerCase();
    if (valor)
      if (this._historial.includes(valor)) {
        this._historial = this._historial.filter(item => item !== valor);
        this._historial.unshift(valor);
      }
      else {
        this._historial.unshift(valor);
      }

    this._historial = this._historial.splice(0, 10);

    localStorage.setItem("historial", JSON.stringify([...this._historial]));

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioURL}/search`, { params })
      .subscribe(resp => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
