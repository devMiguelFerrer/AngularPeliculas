import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private API_KEY = 'TU API KEY'; // RECUERDA PONER AQUI TU API KEY DE THEMOVIEDB
  private URL_DB = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient, private router: Router) { }

  getTopMovies(): Observable<any> {
    return this.http.get(`${this.URL_DB}/movie/popular?api_key=${this.API_KEY}&language=es&page=1`);
  }

  getSearchMovies(termino: string): Observable<any> {
    if (termino.length < 1) {
      return this.getTopMovies();
    }
    return this.http.get(`${this.URL_DB}/search/movie?query=${termino}&sort_by=popularity.desc&api_key=${this.API_KEY}&language=es`);
  }

  getMovieById(idPelicula: string): Observable<any> {
    return this.http.get(`${this.URL_DB}/movie/${idPelicula}?api_key=${this.API_KEY}&language=es`);
  }


}
