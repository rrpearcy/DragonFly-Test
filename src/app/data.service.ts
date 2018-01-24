import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { events } from './events';

@Injectable()
export class DataService {
  // result:any;
  private _url = 'http://dev.dragonflyathletics.com:1337/api/dfkey/events';

  constructor(private _http: HttpClient) { }

  getAllEvents(userName: string, password: string): Observable<events[]> {
    return this._http.get<events[]>(this._url, {
      headers: {
        'Authorization': 'Basic ' + btoa(userName + ':' + password)
      }
    });
  }

}
