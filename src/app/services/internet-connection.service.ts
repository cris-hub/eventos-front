import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternetConnectionService {


  public status = 'ONLINE';
  public isConnected = true;

  constructor(
  ) {
    this.estadoConexion();

  }
  private estadoConexion() {
      this.isConnected = true;
      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";
      }
    
  }
}
