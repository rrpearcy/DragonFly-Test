import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result:any;
  private _url: string = 'http://dev.dragonflyathletics.com:1337/api/dfkey/events';

  constructor(private _http: HttpClient) { }

  getEvents() {
    return this._http.get(this._url, {
      headers: {
        'Authorization': 'Basic ' + btoa("rpearcy" + ":" + "evalpass")
      }
    })
      .map(result => result);
  }

}
