import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public title : string = ''
  public subtitle : string = ''
  public showButtomBack : Boolean = true


  constructor() {
this.title = ''
this.subtitle = ''

   }
}
