import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private signUpData: Object = {
    username: '',
    password: '',
    email: ''
  };

  submitSignUp(): void {
    console.log(this.signUpData);
  }

  constructor() { }

  ngOnInit() {
  }

}
