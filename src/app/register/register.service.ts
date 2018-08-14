import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRegister} from '../register';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisteredService {

  private _url = '/assets/data/registered.json';
  constructor(private http: HttpClient) {
  }

  getRegistered(): Observable<IRegister[]> {
    return this.http.get<IRegister[]>(this._url);
  }
}

