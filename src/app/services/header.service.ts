import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public title : string = ''
  public subtitle : string = ''


  constructor() { }
}
