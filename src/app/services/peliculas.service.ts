import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../models/pelicula.model';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private API_KEY = '0cf26b118a1135c026cd4520ee16326d';
  // private API_KEY = 'TU API KEY'; // RECUERDA PONER AQUI TU API KEY DE THEMOVIEDB
  private URL_DB = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getTopMovies(): Observable<any> {
    return this.http.get(`${this.URL_DB}/movie/popular?api_key=${this.API_KEY}&language=es&page=1`);
  }

  getSearchMovies(termino: string): Observable<any> {
    if (termino.length < 1) {
      return this.getTopMovies();
    }
    return this.http.get(`${this.URL_DB}/search/movie?query=${termino}&sort_by=popularity.desc&api_key=${this.API_KEY}&language=es`);
  }

}
