import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { MainHeaderComponent } from '../layout/main-header/main-header.component';
import { MainContentComponent } from '../layout/main-content/main-content.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LayoutModule } from '../layout/layout.module';
import { CarouselGalleryComponent } from '../components/carousel-gallery/carousel-gallery.component';
import { MainFooterComponent } from '../layout/main-footer/main-footer.component';
import { BreadcrumbsModule } from "ng6-breadcrumbs";
import { EventosService } from '../services/eventos.service';
import { HeaderService } from '../services/header.service';
import { AuthService } from '../services/auth.service';
import { TokenInterceptor } from '../app.interceptor';
import { ReservationService } from '../services/reservation.service';
import { MailService } from '../services/mail.service';
import { CourseDialogComponent } from '../components/lounge-carousel/lounge-carousel.component';
import { LoadingPageModule } from 'angular-loading-page';         //Loading directive
import { MaterialBarModule } from 'angular-loading-page';         //Loading animation component
import { SlidingBarModule } from 'angular-loading-page';         //Loading animation component
import { ThreeBounceModule } from 'angular-loading-page';         //Loading animation component
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { OWL_DATE_TIME_LOCALE, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

export const MY_NATIVE_FORMATS = {
  fullPickerInput: {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'},
  datePickerInput: {year: 'numeric', month: 'numeric', day: 'numeric'},
  timePickerInput: {hour: 'numeric', minute: 'numeric'},
  monthYearLabel: {year: 'numeric', month: 'short'},
  dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
  monthYearA11yLabel: {year: 'numeric', month: 'long'},
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    BreadcrumbsModule,
    LoadingPageModule,
    MaterialBarModule,
    SlidingBarModule,
    ThreeBounceModule,
    

  ],
  declarations: [
    LayoutComponent,
    MainContentComponent,
    MainHeaderComponent,
    MainFooterComponent,
    CourseDialogComponent,
  ],
  exports: [
    LayoutComponent,
    MainContentComponent,
    MainHeaderComponent,
    MainFooterComponent,
    CommonModule,
    FormsModule,
  ],  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'co'},
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS},
    EventosService,
    HeaderService,
    ReservationService,
    MailService,
    AuthService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    },
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    };
  }
}