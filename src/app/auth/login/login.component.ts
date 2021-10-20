import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor() {}

  onSubmit() {
    console.log('email: ', this.loginForm.value.email);
    console.log('password: ', this.loginForm.value.password);
    // this.loginForm.reset();
    this.loginForm.disable();
  }

  ngOnInit(): void {}
}
