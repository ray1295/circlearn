import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// @injectable decorator(), which means we can import it into other components and access its properties and methods.
// --> great way for sharing data between components is to use Rxjs behaviour subject library
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subjects = new BehaviorSubject<any>(['The initial subjects', 'New subject']);
  subject = this.subjects.asObservable();
  constructor() { }

  changeSubject(subject) {
    this.subjects.next(subject);
  }
}
