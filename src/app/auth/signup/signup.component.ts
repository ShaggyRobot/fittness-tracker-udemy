import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public maxDate?: Date;

  constructor() {}

  onSubmit(data: NgForm): void {
    console.log(data.value);
    data.reset();
  }

  isPleased(data: NgModel) {
    if (data.value) {
      const length = data.value.length;
      return length < 6 ? `Want ${6 - length} more` : 'Long enopf can stop';
    }
    return 'do it!';
  }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate?.setFullYear(this.maxDate.getFullYear() - 18);
  }
}
