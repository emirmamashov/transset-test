// core
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// rxjs
import { Observable, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

// config
import { Methods } from '../../config';

// services
import { HandleErrorService } from '../handle-error/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class MasterQueryService {

  constructor(
    private http: HttpClient,
    private handleService: HandleErrorService
  ) { }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data)
    .pipe(
      catchError(this.handleService.handleErrorNew)
    );
  }

  put(url: string, data: any): Observable<any> {
    return this.http.post(url, data)
    .pipe(
      catchError(this.handleService.handleErrorNew)
    );
  }

  get(url: string): Observable<any> {
    return this.http.get(url)
    .pipe(
      catchError(this.handleService.handleErrorNew)
    );
  }

  delete(url: string, auth: boolean): Observable<any> {
    return this.http.delete(url)
    .pipe(
      catchError(this.handleService.handleErrorNew)
    );
  }
}
