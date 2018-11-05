import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { InternetConnectionService } from './internet-connection.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(
    private http: HttpClient,
    private internetConnectionService: InternetConnectionService
  ) {
  }



  public createReservation(nitComapny: string, reservation: string): Observable<any> {
    return this.http.post<any>(
      environment.baseBackEnd
      + 'reserva', { nit: nitComapny, reserva: reservation }).pipe(map(res => res));
  }
}
