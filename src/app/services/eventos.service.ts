import { Injectable } from '@angular/core';
import { experencesFakes } from '../test/fakes/experences.fake';
import { Observable, Subject } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventosService {
  public status = 'ONLINE';
  public isConnected = true;

  constructor(
  ) {
    this.estadoConexion();

  }

  public getExperiencia(): Observable<any> {
    let data = null
    console.log(this.isConnected)
    if (!this.isConnected) {
      data = new Observable((observe) => {
        observe.next(experencesFakes)
        observe.complete();
      });
      return data
    }
    data = new Observable((observe) => {
      observe.next(experencesFakes)
      observe.complete();
    });
    return data
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
