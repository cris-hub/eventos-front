import { Injectable } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';


@Injectable({
  providedIn: 'root'
})
export class InternetConnectionService {


  public status = 'ONLINE';
  public isConnected = true;

  constructor(
    private connectionService: ConnectionService
  ) {
    this.haveInternetConnetion();

  }
  private haveInternetConnetion() {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";
      }
    })
  }
}
