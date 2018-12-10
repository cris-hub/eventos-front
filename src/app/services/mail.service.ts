import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InternetConnectionService } from './internet-connection.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MailModel } from '../model/mail-model';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient,
    private internetConnectionService: InternetConnectionService,
    private config: AppConfig
  ) {
    Object.assign(environment, config.getAllConfig())
  }



  public SentMessage(mailModel: MailModel): Observable<any> {
    return this.http.post<any>(
      environment.baseBackEnd
      + 'send-mail',mailModel ).pipe(map(res => res));
  }
}
