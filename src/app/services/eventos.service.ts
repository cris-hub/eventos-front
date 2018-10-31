import { Injectable } from '@angular/core';
import { EXPERENCESFAKES } from '../test/fakes/experences.fake';
import { Observable, Subject } from 'rxjs';
import { ExperienceModel } from '../model/experience-model';
import { EventTypeModel } from '../model/event-type-model';
import { EVENTTYPEFAKES } from '../test/fakes/event-type.fake';
import { HeadquarteModel } from '../model/headquarte-model';
import { HEADQUEARTERFAKE } from '../test/fakes/headquarter.fake';
import { InternetConnectionService } from './internet-connection.service';
import { ReservationDataModel } from '../model/reservation-data-model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HeadquarterFilterModel } from '../model/headquarter-filter-model';
import { CompanyModel } from '../model/company-model';
import { LoungeModel } from '../model/lounge-model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  public experience: ExperienceModel = new ExperienceModel();
  public reservation: ReservationDataModel = new ReservationDataModel()
  public lounge : LoungeModel = new LoungeModel()
  public company : CompanyModel = new CompanyModel()
  public headquearter : HeadquarteModel = new HeadquarteModel()
  public headquearterFilter: HeadquarterFilterModel = new HeadquarterFilterModel()


  constructor(
    private http: HttpClient,
    private internetConnectionService: InternetConnectionService
  ) {
    this.getTiposEventos();
  }





  public createReservation(nitComapny : string,reservation: ReservationDataModel):Observable<any> {
    return this.http.post<any>(
      environment.baseBackEnd
      + 'reserva', {nit: nitComapny, reserva: JSON.stringify(reservation)}).pipe(map(res => res));
  }
    
  public getExperienciaPorId(id: number): Observable<ExperienceModel> {
    let data = null
    console.log(this.internetConnectionService.isConnected)
    if (!this.internetConnectionService.isConnected) {
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
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.get<ExperienceModel[]>(
        environment.baseManagerContent
        +'recreacion/restexperences/getall-experences' ,{headers : headers}
      );    
  }

    public getlistloungebyheadquarterid(headquarterId:number): Observable<LoungeModel[]> {
            let params =  'headquarterId='+headquarterId ;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post<LoungeModel[]>(
        environment.baseManagerContent
        +'recreacion/restlounge/getlistloungebyheadquarterid',params ,{headers : headers}
      );    
  }


  public getTiposEventos(): Observable<EventTypeModel[]> {
     let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let data = null
    console.log(this.internetConnectionService.isConnected)
    if (!this.internetConnectionService.isConnected) {
      data = new Observable((observe) => {
        observe.next(EVENTTYPEFAKES)
        observe.complete();
      });
      return data
    }
    data = this.http.get<ExperienceModel[]>(
        environment.baseManagerContent
        +'recreacion/restexperences/getall-event-types' ,{headers : headers}
      );  
    return data
  }
  public getHeadquarterByExperence(experenceId: number, capacity: number): Observable<HeadquarteModel[]> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    let data = null
    console.log(this.internetConnectionService.isConnected)
    if (!this.internetConnectionService.isConnected) {
      data = new Observable((observe) => {
        observe.next(HEADQUEARTERFAKE)
        observe.complete();
      });
      return data
    }
            let params =  'capacity='+capacity +'&experenceId=' + experenceId ;

    data =  this.http.post<ExperienceModel[]>(
        environment.baseManagerContent
        +'recreacion/restheadquarter/getlistheadquarterbycapacityloungeandexperenceid',params ,{headers : headers}
      );    
    return data

  }
}
