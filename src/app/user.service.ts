import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
const API = 'https://5af93d25edf5520014cbd24b.mockapi.io/api/v1/';
@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
  }

  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

}
