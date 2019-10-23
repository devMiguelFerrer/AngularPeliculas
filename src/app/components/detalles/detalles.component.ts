import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pelicula } from './../../models/pelicula.model';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit, OnDestroy {

  pelicula: Pelicula;
  private peliculaSubscription: Subscription;

  constructor(private route: ActivatedRoute, private peliculasService: PeliculasService, private router: Router) { }

  ngOnInit() {
    this.peliculaSubscription = this.route.params.subscribe((idPelicula: {id: string}) => {
      if (idPelicula.id.length < 1) {
        this.router.navigate(['/']);
      } else {
        this.peliculasService.getMovieById(idPelicula.id).subscribe((pelicula: Pelicula) => {
          this.pelicula = pelicula;
        });
      }
    });
  }

  ngOnDestroy() {
    this.peliculaSubscription.unsubscribe();
  }

}
