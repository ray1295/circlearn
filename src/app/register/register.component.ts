import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RegisteredService} from './register.service';
import * as User from '../interfaces/users'

@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional: boolean = false;

  //   public registered = [];
    rForm: FormGroup;
  //   post: any;  // A property off our submitted form
  //   description = '';
  //   name = '';
  //   authAlert = 'This field is required';

  user: User.User;

  constructor(private fb: FormBuilder, private _registeredService: RegisteredService ) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
    });
  }

  register() {
    this._registeredService.getRegistered()
  }

  // addPost(post) {
  //   this.description = post.description;
  //   this.name = post.name;
  // }
  ngOnInit() {
    // this._registeredService.getRegistered()
    //   .subscribe(data => this.registered = data, error => {
    //     console.log(error);
    //   });
    this.rForm = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ''
    });
  }

}
