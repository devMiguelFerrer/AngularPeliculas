import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../models/pelicula.model';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit, OnDestroy {

  peliculas: Pelicula[];
  private peliculaSubscription: Subscription;

  constructor(private peliculasService: PeliculasService ) { }

  ngOnInit() {
    this.peliculaSubscription = this.peliculasService.getTopMovies().subscribe((peliculas: {results: Pelicula[]}) => {
      this.peliculas = peliculas.results;
    });
  }

  ngOnDestroy() {
    this.peliculaSubscription.unsubscribe();
  }

}
