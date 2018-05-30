import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  private url: String = 'http://localhost:3000';
  constructor() { }
}
