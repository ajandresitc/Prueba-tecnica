import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RootObject } from './models/Imodels';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getClients(page: number, elements: number): Observable<RootObject> {
    return this.http.get<RootObject>(environment.apiUrl + 'clients?page=' + page + '&per_page=' + elements);
  }
}
