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
  getAllCategory(){
    return this.http.get(`${environment.renderApiLink}/api/home-management/`);
  }
  getByCategory(category:string,page:{page:number}){
    return this.http.put(`${environment.renderApiLink}/api/home-management/category/${category}`,page);
  }
}
