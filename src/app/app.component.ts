import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from './data.service';
import { events } from './events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  eventName: any;
  userName: string ='rpearcy';
  password: string ='evalpass';
  events: events[];

  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this.getAllEvents();
      }

    getAllEvents() {
      this._data.getAllEvents(this.userName, this.password)
        .subscribe(res => {
            this.events = res;
            console.log(res);
            console.log('JSON loaded!!');
          },
          error => {
            alert('ERROR!!');
    });
  }
}
