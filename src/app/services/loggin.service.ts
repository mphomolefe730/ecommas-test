import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor(
    private http:HttpClient
  ) { }

  login(value:{email:string,hashedPassword:string}){
    return this.http.post(`${environment.renderApiLink}/api/user/login`,value);
  }
}
