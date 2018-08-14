import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RegisteredService} from './register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public registered = [];
    rForm: FormGroup;
    post: any;  // A property off our submitted form
    description = '';
    name = '';
    authAlert = 'This field is required';
  constructor(private fb: FormBuilder, private _registeredService: RegisteredService ) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
    });
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }
  ngOnInit() {
    this._registeredService.getRegistered()
      .subscribe(data => this.registered = data);
  }

}
