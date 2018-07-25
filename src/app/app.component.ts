import {Component} from '@angular/core';
import { Subject } from './subject';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itemCount: number;
  btnText  = 'Add a subject';
  subjectText  = 'My next Subject';
  subjects = [
    new Subject(1, 'Math'),
    new Subject (13, 'Economics'),
    new Subject(22, 'Art'),
    new Subject (23, 'Music')
  ];
  favSubject = this.subjects[0];
  constructor(private _data: DataService) {}
}


