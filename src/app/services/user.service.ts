import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  createUser(user: any){
    return this.http.post(`${environment.renderApiLink}/api/user/add`, user);
  }
}
