import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    SharedModule
  ],
  declarations: [],
  exports: [LayoutComponent, MainHeaderComponent, MainContentComponent]
})
export class LayoutModule { }