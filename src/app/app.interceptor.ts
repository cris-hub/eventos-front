import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from './services/auth.service';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //SI NO TIENE EL HEADER 'X-Skip-Interceptor' CONCATENA EL TOKEN JWT
        if (!req.headers.has(InterceptorSkipHeader)) {
            const access_token = sessionStorage.getItem('jwt_sessionid');

            if (access_token) {

                const clonedAuthRequest = req.clone({
                    headers: req.headers.set('Authorization', 'Bearer ' + access_token)
                });
                //FUNCION PARA CONTINUAR CON LA PETICION CON EL TOKEN JWT
                return this.nextHandle(clonedAuthRequest, next);
            } else {
                return next.handle(req);
            }
            // SI TIENE EL HEADER X-Skip-Interceptor SE SALTA EL TOKEN JWT
        } else {
            /**
             * BORRO LA CABECERA 'X-Skip-Interceptor'
             * PARA QUE NO INTERFIERA EN LOS SERVICIOS
             */
            const clonedAuthRequest = req.clone({
                headers: req.headers.delete(InterceptorSkipHeader)
            });
            //FUNCION PARA CONTINUAR CON LA PETICION SIN EL HEADER 'X-Skip-Interceptor'
            return this.nextHandle(clonedAuthRequest, next);

        }
    }

    /**
     * Funcion que continua la peticion luego de haber sido interceptada
     */
    nextHandle(clonedAuthRequest: any, next: HttpHandler) {
        return next.handle(clonedAuthRequest).pipe(
            catchError(err => {
                if (err instanceof HttpErrorResponse && err.status === 0) {
                    console.log('Check Your Internet Connection And Try again Later');
                } else if (err instanceof HttpErrorResponse && err.status === 401) {
                    const authService = this.injector.get(AuthService);
                    authService.login();
                }
                return throwError(err);
            })
        );
    }
}
