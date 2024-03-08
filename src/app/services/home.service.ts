import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit{

  constructor(
    private http:HttpClient,
  ) { }

  ngOnInit():void{
    
  }
}
