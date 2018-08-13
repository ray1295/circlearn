import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
  // styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  constructor(private builder: FormBuilder) {
  }
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  password = new FormControl('', [
    Validators.required,
    this.hasPunctuation('&', 'ampersandRequired')
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

  hasPunctuation(punctuation: string, errorType: string) {
    return (input: FormControl) => {
      return input.value.indexOf(punctuation) >= 0 ?
        null :
        { [errorType]: true };
    };
  }

}
