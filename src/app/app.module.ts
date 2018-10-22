import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperiencesListComponent } from './components/experiences/experiences-list/experiences-list.component';
import { ExperiencesDetailsComponent } from './components/experiences/experiences-details/experiences-details.component';
import { CarouselGalleryComponent, CourseDialogComponent } from './components/carousel-gallery/carousel-gallery.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EventosService } from './services/eventos.service';
import { FiltroSedeComponent } from './components/filtro-sede/filtro-sede.component';
import { DatosEventoComponent } from './components/datos-evento/datos-evento.component';
import { HeadquarterListComponent } from './components/headquarter/headquarter-list/headquarter-list.component';
import { HeadquarteDetailsComponent } from './components/headquarter/headquarte-details/headquarte-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoungeCarouselComponent } from './components/lounge-carousel/lounge-carousel.component';
import { LoungeTabInfoComponent } from './components/lounge-tab-info/lounge-tab-info.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { ReservationComponent } from './components/reservation/reservation-data-event/reservation.component';
import { ReservationDataCompanyComponent } from './components/reservation/reservation-data-company/reservation-data-company.component';
import { ReservationSummaryComponent } from './components/reservation/reservation-summary/reservation-summary.component';
import { SharedModule } from './shared/shared.module';
import { ConfirmationReservationComponent } from './components/confirmation/confirmation-reservation/confirmation-reservation.component';
import { HeaderService } from './services/header.service';
import { ValidacionDirective } from './directivas/validacion/validacion.directive';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CalendarPicker } from './shared/calendar-picker';
@NgModule({
  declarations: [
    AppComponent,
    ExperiencesListComponent,
    ExperiencesDetailsComponent,
    CarouselGalleryComponent,
    CourseDialogComponent,
    FiltroSedeComponent,
    DatosEventoComponent,
    HeadquarteDetailsComponent,
    HeadquarterListComponent,
    LoungeCarouselComponent,
    LoungeTabInfoComponent,
    ReservationComponent,
    ReservationDataCompanyComponent,
    ReservationSummaryComponent,
    ConfirmationReservationComponent,
    ValidacionDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    SharedModule.forRoot()


  ],exports : [HeadquarteDetailsComponent,ValidacionDirective],
  providers: [EventosService,HeaderService],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent]

})
export class AppModule { }
