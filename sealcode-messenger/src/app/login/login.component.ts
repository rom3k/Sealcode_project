import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userData: Object = {
    login: '',
    password:''
  };

  submit(): void{
    console.log(this.userData);
  }

  constructor() { }

  ngOnInit() {
  }

}
