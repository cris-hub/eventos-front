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

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
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
    ThreeBounceModule


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