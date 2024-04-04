import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  constructor(
    private http:HttpClient
  ) { }

  getMessage(){
    return this.http.get(`${environment.renderApiLink}/api/status`);
  }
  addAnnouncement(object:{status:boolean,statusText:string}){
    return this.http.post(`${environment.renderApiLink}/api/status`,object)
  }
}
