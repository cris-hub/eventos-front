import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesListComponent } from './components/experiences/experiences-list/experiences-list.component';
import { FiltroSedeComponent } from './components/filtro-sede/filtro-sede.component';
import { HeadquarterListComponent } from './components/headquarter/headquarter-list/headquarter-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/experiencias', pathMatch: 'full' },
  { path: 'experiencias', component: ExperiencesListComponent },
  { path: 'experiencia/:experiencia', component: FiltroSedeComponent },
  { path: 'experiencia/:experiencia/sedes', component: HeadquarterListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
