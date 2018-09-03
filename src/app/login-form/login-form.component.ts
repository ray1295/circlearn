import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  // styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  checked = false;
  hide = true;

  constructor(private builder: FormBuilder) {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  password = new FormControl('', [
    Validators.required,
  ]);

  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });
  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
    // Attempt logging in...
  }

  }
