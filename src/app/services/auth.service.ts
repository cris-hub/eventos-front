import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {CONSTANTS} from './constants';
import * as moment from "moment";
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class AuthService {

    // private urlAuth: string;
    private authUsername: string;
    private authPassword: string;
    private authModule: string;

    constructor(private _http: HttpClient) {
        // this.urlAuth = CONSTANTS.urlAuth;
        this.authUsername = CONSTANTS.authApiRest_username;
        this.authPassword = CONSTANTS.authApiRest_password;
        this.authModule = CONSTANTS.authApiRest_module;
    }

    /**
     * Funcion para autenticar la aplicacion y recibir el token JWT
     */
    login() {
        if (!this.isLoggedIn()) {
            let params = 'Authapirest[username]='
                + this.authUsername
                + '&Authapirest[password]='
                + this.authPassword
                + '&Authapirest[module]='
                + this.authModule;
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            headers = headers.append('X-Skip-Interceptor', 'true');
            return this._http.post(
                environment.baseManagerContent+
                'recreacion/resthotel/login'
                , params, {headers: headers})
                .pipe(
                    retry(3), // reintentar una solicitud fallida hasta 3 veces
                    catchError(this.handleError)
                ).subscribe(
                    data => {
                        this.setSession(data);
                    },
                    error => {
                        console.info('Error: ' + error);
                    }
                );
        }
    }
    
    /**
     * funcion para determinar si el token esta activo
     */
    private isLoggedIn(): boolean {
        return moment().isBefore(this.getExpiration());
    }
    
    /**
     * funcion para setear y guardar en session los datos del token
     * @param {Object} data: datos del token
     */
    private setSession(data) {
        const expiresAt = moment.unix(data.expireIn);
        sessionStorage.setItem('jwt_sessionid', data.access_token);
        sessionStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    }
    
    /**
     * funcion para obtener la fecha de expiracion del Token
     */
    getExpiration() {
        const expiration = sessionStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    /**
    * Manejo de errores en los servicios.    * 
    * @param {HttpErrorResponse} error.
    */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // Se produjo un error en el lado del cliente o en la red.
            console.error(CONSTANTS.msgErrorEventService, error.error.message);
        } else {
            // El servidor devolvió un código de respuesta fallido.
            console.error(CONSTANTS.msgErrorCodeService + `(${error.status})1 ${error.message}2`);
        }
        // Mensaje generico para el usuario
        return throwError(CONSTANTS.msgErrorGenericService);
    }

}