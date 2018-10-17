import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { MainHeaderComponent } from '../layout/main-header/main-header.component';
import { MainContentComponent } from '../layout/main-content/main-content.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { LayoutModule } from '../layout/layout.module';
import { CarouselGalleryComponent } from '../components/carousel-gallery/carousel-gallery.component';
import { MainFooterComponent } from '../layout/main-footer/main-footer.component';

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

  ],
  declarations: [
    LayoutComponent,
    MainContentComponent,
    MainHeaderComponent,
    MainFooterComponent
  ],
  exports: [
    LayoutComponent,
    MainContentComponent,
    MainHeaderComponent,
    MainFooterComponent,
    CommonModule,
    FormsModule,
  ]
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