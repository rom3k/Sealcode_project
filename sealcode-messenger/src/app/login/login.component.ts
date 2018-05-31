import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/index';
import { HTTPService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HTTPService) {  }

  private userData: Object = {
    login: '',
    password: ''
  };

  private users: Object;

  ngOnInit() {
  }

}
