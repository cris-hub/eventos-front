import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InternetConnectionService } from './internet-connection.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MailModel } from '../model/mail-model';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient,
    private internetConnectionService: InternetConnectionService
  ) {
  }



  public SentMessage(mailModel: MailModel): Observable<any> {
    return this.http.post<any>(
      environment.baseBackEnd
      + 'send-mail',mailModel ).pipe(map(res => res));
  }
}
