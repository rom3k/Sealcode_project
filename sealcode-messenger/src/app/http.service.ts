import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  private url: String = 'http://localhost:6534';

  constructor(private httpClient: HttpClient) { }
  postData(body: Object): Observable<Object> {
    return this.httpClient.post('http://localhost:6534/auth', body);
  }
}
