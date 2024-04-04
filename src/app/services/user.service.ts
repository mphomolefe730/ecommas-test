import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { userModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  createUser(user: userModel){
    return this.http.post(`${environment.renderApiLink}/api/user/add`, user);
  }
  searchForUser(query:{search:string}){
    return this.http.post(`${environment.renderApiLink}/api/user/search`,query);
  }
}
