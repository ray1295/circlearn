import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  // styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    rForm: FormGroup;
    post: any;  // A property off our submitted form
    description = '';
    name = '';
    authAlert = 'This field is required';
  constructor(private fb: FormBuilder) {
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
  }

}
