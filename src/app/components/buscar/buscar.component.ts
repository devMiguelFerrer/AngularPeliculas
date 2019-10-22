import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';

import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit, OnDestroy {

  peliculas: Pelicula[];
  displayedColumns: string[] = ['imagen', 'nombre', 'fecha', 'popularidad', 'votos'];
  dataSource: MatTableDataSource<Pelicula>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private peliculasSubscription: Subscription;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.buscar('');
  }

  buscar(valor: string): void {
    this.peliculasSubscription = this.peliculasService.getSearchMovies(valor).subscribe((resp: {results: Pelicula[]}) => {
      this.peliculas = resp.results;
      this.dataSource = new MatTableDataSource(this.peliculas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filter = valor.trim().toLocaleLowerCase();
    });
  }

  ngOnDestroy() {
    this.peliculasSubscription.unsubscribe();
  }

}
