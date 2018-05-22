import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/index";
import { HTTPService } from "../http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HTTPService) {  }

  private userData: Object = {
    login: '',
    password:''
  };

  private users: Object;

  private subscriptions: Array<Subscription> = [];

  //MOCK VALIDATION

  async getData(event, body){
    let promise = new Promise((resolve, reject) => {
      this.subscriptions.push(
        this.httpService.getData().subscribe(
          data => { this.users = data; resolve();},
          error => { alert('Oops!'); reject(); }
        )
      );
    }).then(() => {
      let username = body.username;
      let password = body.password;
      Object.keys(this.users).map(key => {
        if(username === this.users[key].username && password === this.users[key].password) {
          localStorage.setItem('isLogged', "someFancyHash");
        }
      });
      if(!localStorage.getItem("isLogged"))
        alert('Error!');
    });
  }

  ngOnInit() {
  }

}
