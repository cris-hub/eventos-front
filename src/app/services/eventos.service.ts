import { Injectable } from '@angular/core';
import { EXPERENCESFAKES } from '../test/fakes/experences.fake';
import { Observable, Subject } from 'rxjs';
import { ExperienceModel } from '../model/experience-model';
import { EventTypeModel } from '../model/event-type-model';
import { EVENTTYPEFAKES } from '../test/fakes/event-type.fake';
import { HeadquarteModel } from '../model/headquarte-model';
import { HEADQUEARTERFAKE } from '../test/fakes/headquarter.fake';
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  public status = 'ONLINE';
  public isConnected = true;

  constructor(
  ) {
    this.getTiposEventos();
    this.estadoConexion();
  }


  public getExperienciaPorId(id: number): Observable<ExperienceModel> {
    let data = null
    console.log(this.isConnected)
    if (!this.isConnected) {
      data = new Observable((observe) => {
        observe.next(EXPERENCESFAKES.find(experiencia => experiencia.id === id))
        observe.complete();
      });
      return data
    }
    data = new Observable((observe) => {
      observe.next(EXPERENCESFAKES.find(experiencia => experiencia.id === id))
      observe.complete();
    });
    return data


  }
  public getExperiencias(): Observable<ExperienceModel[]> {
    let data = null
    console.log(this.isConnected)
    if (!this.isConnected) {
      data = new Observable((observe) => {
        observe.next(EXPERENCESFAKES)
        observe.complete();
      });
      return data
    }
    data = new Observable((observe) => {
      observe.next(EXPERENCESFAKES)
      observe.complete();
    });
    return data
  }

  public getTiposEventos():Observable<EventTypeModel[]> {
    let data = null
    console.log(this.isConnected)
    if (!this.isConnected) {
      data = new Observable((observe) => {
        observe.next(EVENTTYPEFAKES)
        observe.complete();
      });
      return data
    }
    data = new Observable((observe) => {
      observe.next(EVENTTYPEFAKES)
      observe.complete();
    });
    return data
  }
  public getHeadquarterByExperence():Observable<HeadquarteModel[]>{
    let data = null
    console.log(this.isConnected)
    if (!this.isConnected) {
      data = new Observable((observe) => {
        observe.next(HEADQUEARTERFAKE)
        observe.complete();
      });
      return data
    }
    data = new Observable((observe) => {
      observe.next(HEADQUEARTERFAKE)
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
