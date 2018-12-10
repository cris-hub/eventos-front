import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppConfig {

  private config: Object = null;
  private env:    Object = null;

  constructor(private http: Http) {
  }

  /**
   * Use to get the data found in the second file (config file)
   */
  public getConfig(key: any) {
    return this.config[key];
  }
  public getAllConfig() {
    return this.config;
  }
  /**
   * Use to get the data found in the first file (env file)
   */
  public getAllEnv() {
    return this.env;
  }
  public getEnv(key: any) {
    return this.env[key];
  }

  /**
   * This method:
   *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
   *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
   */
  public load() {
    return new Promise((resolve, reject) => {
      this.http.get('./assets/config/env.json').pipe(map( res => res.json())).subscribe( (envResponse) => {
        this.env = envResponse;
        let request: Observable<any> = null;

        switch (envResponse.env) {
          case 'production': {
            request = this.http.get('./assets/config/env.' + envResponse.env + '.json');
          } break;

          case 'development': {
            request = this.http.get('./assets/config/env.' + envResponse.env + '.json');
          } break;

          case 'default': {
            console.error('Environment file is not set or invalid');
            resolve(true);
          } break;
        }

        if (request) {
          request.pipe(map( res => res.json() ))            
            .subscribe((responseData: any) => {
              this.config = responseData;
              Object.assign(environment,this.config)
              resolve(true);
            });
        } else {
          console.error('Env config file "env.json" is not valid');
          resolve(true);
        }
      });

    });
  }
}