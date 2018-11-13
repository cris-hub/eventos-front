import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
  <div *mkLoadingPage="{checkPendingHttp: true}">
    <mk-sliding-bar colorOne="#3293FB"  colorTwo="#3293FB" colorTwo></mk-sliding-bar>
  </div>
  <router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent implements OnInit {
  public title = 'app';

  constructor(private _serviceAuth: AuthService) { }

  ngOnInit() { this._serviceAuth.login(); }
}