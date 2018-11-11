import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceService {

  constructor(public http: Http, private httpc: HttpClient) {
  }
  login(values: string): Observable<any> {
    const body = values;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://ferbo.com.br/api/authenticate/mobile', body, options)
      .map(res => res.json());
  }
  saveUserVideo(values: string): Observable<any> {
    const body = values;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    /*const token = localStorage.getItem('token');
    headers.append('Authorization', token);*/
    return this.http.post('https://ferbo.com.br/api/users', body, options)
      .map(res => res.json());
  }
  /**Start User VC */
  registerUserVc(values: string): Observable<any> {
    const body = values;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://ferbo.com.br/api/users_vc', body, options)
      .map(res => res.json());
  }
  getUserVc(id) {
    return this.http.get('https://ferbo.com.br/api/users_vc/' + id)
      .map(res => res.json());
  }
  loginUserVc(id, id2) {
    return this.http.get('https://ferbo.com.br/api/users_vc_login/' + id + '/' + id2)
      .map(res => res.json());
  }
  updateUserVc(values: string, id): Observable<any> {
    const body = values;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://ferbo.com.br/api/users_vc/' + id, body, options)
      .map(res => res.json());
  }
  /**End User VC */
  /**Start User Business */
  registerBusinessData(values: string): Observable<any> {
    const body = values;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://ferbo.com.br/api/users_business', body, options)
      .map(res => res.json());
  }
  loginBusinesUser(id, id2) {
    return this.http.get('https://ferbo.com.br/api/users_bsnss_login/' + id + '/' + id2)
      .map(res => res.json());
  }
  registerRating(values: string): Observable<any> {
    const body = values;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://ferbo.com.br/api/rating_vc', body, options)
      .map(res => res.json());
  }
  saveIMG(img): Observable<any> {
    const body = img;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://ferbo.com.br/api/users_business', body, options)
      .map(res => res.json());
  }
}
