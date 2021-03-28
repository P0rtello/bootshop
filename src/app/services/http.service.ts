import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = environment.api_url;
  databaseUrl: string = "http://localhost:8080";
  options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

  constructor(private http: HttpClient) {

  }

  getAllUsers(): Observable<User[]>{
    return this.http
      .get(this.databaseUrl + "/user/all/")
      .pipe(map(res => <User[]>res));
  }

  getUser(email:string): Observable<User>{
    return this.http
      .get(this.databaseUrl + "/user/get/" + email)
      .pipe(map(res => <User>res));
  }

  postUser(email:string, password:string){
    console.log("email: " + email + ", password: " + password);
    return this.http
      .post(this.databaseUrl + "/user/add?email=" + email + "&password=" + password, this.options);
  }




}
