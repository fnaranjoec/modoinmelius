import { Injectable, Component, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of , throwError} from 'rxjs';
import { map, catchError, tap, retry  } from 'rxjs/operators';
import { environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ServiceLogin {

  endpoint: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':  '*',
      'X-Requested-With': 'XMLHttpRequest',
      // 'Authorization': 'Basic ' + btoa(apicredentials),
    })
  };

  constructor(
    private http: HttpClient,
  ) {
    this.endpoint = environment.API_ENDPOINT_URL + '/seguridad/login';

  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  login(usr, pwd): Observable<any> {
    return this.http.get(this.endpoint + '/' + usr + '/' + pwd, this.httpOptions).pipe(map(this.extractData), catchError(err => this.handleError(err)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError( error.error );
  }

  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }*/
}
