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
  updateUser(newEntity:any,userId:string){
    return this.http.put(`${environment.renderApiLink}/api/user/${userId}`,newEntity);
  }
  getUserById(userId:string){
    return this.http.get(`${environment.renderApiLink}/api/user/${userId}`);
  }
}