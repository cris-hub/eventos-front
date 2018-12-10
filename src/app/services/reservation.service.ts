import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { InternetConnectionService } from './internet-connection.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(
    private http: HttpClient,
    private config: AppConfig
    ) {
      Object.assign(environment, config.getAllConfig())
  }



  public createReservation(nitComapny: string, reservation: string): Observable<any> {
    return this.http.post<any>(
      environment.baseBackEnd
      + 'reserva', { nit: nitComapny, reserva: reservation }).pipe(map(res => res));
  }
}
