import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Events } from './events';

@Injectable()
export class DataService {
  Events: Observable<Events[]>;
  private _url = 'http://dev.dragonflyathletics.com:1337/api/dfkey/events';

  constructor(private _http: HttpClient) { }

  getAllEvents(userName: string, password: string): Observable<Events[]> {
    return this._http.get<Events[]>(this._url, {
      headers: {
        'Authorization': 'Basic ' + btoa(userName + ':' + password)
      }
    }
    );
  }

  getEventImage(eventid: string, imageid: string, userName: string, password: string): Observable<Events[]> {
    var url = this._url + '/' + eventid + '/media/' + encodeURI(imageid);
    console.log(url);
    return this._http.get<Events[]>(url, {
        headers: {
          'Authorization': 'Basic ' + btoa(userName + ':' + password)
        }
      }
    );
  }

}
