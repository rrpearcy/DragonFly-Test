import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';

import { DataService } from './data.service';
import { Events } from './events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName: string ='rpearcy';
  password: string ='evalpass';
  // TODO: Create Login Component to pull the userName and password from user input
  events: Array<Events> = [];
  private _url = 'http://dev.dragonflyathletics.com:1337/api/dfkey/events/';

  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this.getAllEvents();
      }

    getAllEvents() {
      this._data.getAllEvents(this.userName, this.password)
        .subscribe(data => {
            this.events = data;
            console.log(this.events);
            for (let i = 0; i < this.events.length; i++) {
              this.events[i].url = this._url + this.events[i].id;
              // GET FIRST IMAGE
              // if (this.events[i].images.length > 0) {
              //   this._data.getEventImage(this.events[i].id, this.events[i].images[0].id, this.userName, this.password)
              //     .subscribe(image => {
              //       console.log(image);
              //       this.events[i].image = image;
              //     });
              // }
              // GET this.events[i].url + /media/ + this.events[i].images[0].id
            }
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('An error occurred:', err.error.message);
            } else {
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
          }
        );
  }
}
