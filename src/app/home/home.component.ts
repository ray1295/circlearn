import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subjectCount = 4;
  btnText = 'Add a subject';
  subjectText = 'My fav subject';
  subjects = [];
  constructor(private _data: DataService) {}

  ngOnInit() {
    this.subjectCount = this.subjects.length;
    this._data.subject.subscribe(res => this.subjects = res);
    this._data.changeSubject(this.subjects);
  }

  addSubject() {
    this.subjects.push(this.subjectText);
    this.subjectText = '';
    this.subjectCount = this.subjects.length;
    this._data.changeSubject(this.subjects);
  }

  removeSubject(i) {
    this.subjects.splice(i, 1);
    this._data.changeSubject(this.subjects);
  }
}
