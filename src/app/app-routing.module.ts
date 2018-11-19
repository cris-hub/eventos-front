import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesListComponent } from './components/experiences/experiences-list/experiences-list.component';
import { FiltroSedeComponent } from './components/filtro-sede/filtro-sede.component';
import { HeadquarterListComponent } from './components/headquarter/headquarter-list/headquarter-list.component';
import { ReservationComponent } from './components/reservation/reservation-data-event/reservation.component';
import { ReservationDataCompanyComponent } from './components/reservation/reservation-data-company/reservation-data-company.component';
import { ReservationSummaryComponent } from './components/reservation/reservation-summary/reservation-summary.component';
import { LayoutComponent } from './layout/layout.component';
import { ConfirmationReservationComponent } from './components/confirmation/confirmation-reservation/confirmation-reservation.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:
      [

        {
          path: '', redirectTo: '/experiencias', pathMatch: 'full'},
        {
          path: 'experiencias', component: ExperiencesListComponent},
        { path: 'experiencia/:experiencia', component: FiltroSedeComponent  },
        { path: 'experiencia/:experiencia/sedes', component: HeadquarterListComponent },
        { path: 'experiencia/:experiencia/sede/:sede/:salon/reserva', component: ReservationComponent },
        { path: 'experiencia/:experiencia/sede/:sede/:salon/reserva/datos-empresa', component: ReservationDataCompanyComponent },
        { path: 'experiencia/:experiencia/sede/:sede/:salon/detalle-reserva', component: ReservationSummaryComponent },
        { path: 'experiencia/:experiencia/sede/:sede/:salon', component: ConfirmationReservationComponent }

      ]
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
