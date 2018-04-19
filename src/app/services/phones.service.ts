import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as config from '../../core/config.json';

@Injectable()
export class PhonesService {

  config = (<any>config);

  constructor(private http: Http) { }

  getPhones(): Observable<Response> {
    return this.http.get(this.config.server + this.config.endpoints.phones);
  }

}
