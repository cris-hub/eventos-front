import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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

import {CarouselModule} from 'ngx-bootstrap/carousel';
import { EventosService } from './services/eventos.service';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesListComponent,
    ExperiencesDetailsComponent,
    CarouselGalleryComponent,
    CourseDialogComponent

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
    BrowserAnimationsModule

    
  ],
  providers: [EventosService],
  bootstrap: [AppComponent],
  entryComponents : [CourseDialogComponent]

})
export class AppModule { }
