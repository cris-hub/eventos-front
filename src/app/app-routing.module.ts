import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesListComponent } from './components/experiences/experiences-list/experiences-list.component';

const routes: Routes = [
  {path: '', component: ExperiencesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
