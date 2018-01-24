import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from './data.service';
import { events } from './events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // eventName: any;
  userName: string ='rpearcy';
  password: string ='evalpass';
  // TODO: Create Login Component to pull the userName and password from user input
  events: events[];

  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this.getAllEvents();
      }

    getAllEvents() {
      this._data.getAllEvents(this.userName, this.password)
        .subscribe(data => {
            this.events = data;
            // console.log(this.events);
            // console.log('JSON loaded!!');
          },
          error => {
            alert('ERROR!!');
    });
  }
}
