import { BuscarComponent } from './components/buscar/buscar.component';
import { PopularesComponent } from './components/populares/populares.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: PopularesComponent},
  { path: 'buscar', component: BuscarComponent},
  { path: '**', component: PopularesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
