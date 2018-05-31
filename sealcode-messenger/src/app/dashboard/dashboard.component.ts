import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private username: String = 'Michal';
  private room: String = 'Global';

  constructor() { }

  ngOnInit() {
  }

}
