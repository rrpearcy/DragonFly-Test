import { Component } from '@angular/core';
import { DataService } from './data.service';
import {Data} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  eventName: any;
  // eventId: any;

  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this._data.getEvents()
      .subscribe(res => {
        this.eventName = res;
        console.log(res);
        console.log('JSON loaded!!');
      },
      error => {
        alert('ERROR!!');
      });
  }
}
