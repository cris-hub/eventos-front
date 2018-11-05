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
  public lounge: LoungeModel = new LoungeModel()
  public company: CompanyModel = new CompanyModel()
  public headquearter: HeadquarteModel = new HeadquarteModel()
  public headquearterFilter: HeadquarterFilterModel = new HeadquarterFilterModel()


  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(
    private http: HttpClient,
    private internetConnectionService: InternetConnectionService
  ) {
    this.getTiposEventos();
  }







  public getExperienceById(id: number): Observable<ExperienceModel> {
    let params = 'experenceId=' + id;
    let data = null
    data = this.http.post<LoungeModel[]>(
      environment.baseManagerContent
      + 'recreacion/restexperences/getexperencesbyid', params, { headers: this.header }
    );
    return data

    //
  }
  public getallcities(): Observable<any> {
    return this.http.get<any>(
      environment.baseManagerContent
      + 'recreacion/restexperences/getallcities', { headers: this.header }
    );
  }

  public getExperiencias(): Observable<ExperienceModel[]> {
    return this.http.get<ExperienceModel[]>(
      environment.baseManagerContent
      + 'recreacion/restexperences/getall-experences', { headers: this.header }
    );
  }

  public getlistloungebyheadquarteridandloungecapacity(headquarterId: number,capacity : number): Observable<LoungeModel[]> {
    let params = 'headquarterId=' + headquarterId + '&capacity=' + capacity;
    return this.http.post<LoungeModel[]>(
      environment.baseManagerContent
      + 'recreacion/restlounge/getlistloungebyheadquarteridandloungecapacity', params, { headers: this.header }
    );
  }


  public getTiposEventos(): Observable<EventTypeModel[]> {
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
      + 'recreacion/restexperences/getall-event-types', { headers: this.header }
    );
    return data
  }
  public getHeadquarterByExperence(experenceId: number, capacity: number): Observable<HeadquarteModel[]> {

    let params = 'capacity=' + capacity + '&experenceId=' + experenceId;

    let data = null
    console.log(this.internetConnectionService.isConnected)
    if (!this.internetConnectionService.isConnected) {
      data = new Observable((observe) => {
        observe.next(HEADQUEARTERFAKE)
        observe.complete();
      });
      return data
    }

    data = this.http.post<ExperienceModel[]>(
      environment.baseManagerContent
      + 'recreacion/restheadquarter/getlistheadquarterbycapacityloungeandexperenceid', params, { headers: this.header }
    );
    return data

  }
}
