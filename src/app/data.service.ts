import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { event } from './events';

@Injectable()
export class DataService {
  // result:any;
  private _url = 'http://dev.dragonflyathletics.com:1337/api/dfkey/events';

  constructor(private _http: HttpClient) { }

  getAllEvents(userName: string, password: string): Observable<event[]> {
    return this._http.get<event[]>(this._url, {
      headers: {
        'Authorization': 'Basic ' + btoa(userName + ':' + password)
        // TODO: Would like to get the username and password from a login component but hard coded from app component for now
      }
    });
      // .map(result => result);
  }

}
