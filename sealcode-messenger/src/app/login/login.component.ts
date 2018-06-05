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

  private subscriptions: Array<Subscription> = [];

  ngOnInit() {
  }

  sendData(form: Object) {
    this.subscriptions.push(
      this.httpService.postData(form).subscribe(
        data => { console.log(data); },
        error => { console.log(error); }
      )
    );
  }
}
