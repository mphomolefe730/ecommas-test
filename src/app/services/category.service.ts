import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:HttpClient
  ) { }

  getActiveCategory(){
    return this.http.get(`${environment.renderApiLink}/api/home-management/active`);
  }
  getByCategory(category:string){
    return this.http.get(`${environment.renderApiLink}/api/home-management/category/${category}`);
  }
}
