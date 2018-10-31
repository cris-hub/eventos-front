import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  public title = 'app';

    constructor(private _serviceAuth: AuthService) {}

    ngOnInit() {this._serviceAuth.login();}
}