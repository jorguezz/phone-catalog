import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { PhonesState, Phone } from '../store/state';

import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {

  private urlBase: string;

  constructor(public http: Http) {
    this.urlBase = environment.api_phones;
  }

  getPhones(): Observable<PhonesState> {
    return this.http.get(`${this.urlBase}phones`)
      .map(res => res.json());
  }

  getPhone(id): Observable<Phone> {
    return this.http.get(`${this.urlBase}phones${id}`)
      .map(res => res.json());
  }

}
