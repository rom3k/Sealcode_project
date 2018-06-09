import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/index';
import { HTTPService } from '../http.service';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HTTPService, public authService: AuthService, public router: Router) {  }

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

  login() {
    this.subscriptions.push(
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectURL ? this.authService.redirectURL : '/dashboard';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    })
  );
  }
}
