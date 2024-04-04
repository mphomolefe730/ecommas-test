import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class RoleService implements OnInit{
  role:{_id:string,role:string}[]=[];

  constructor(
    private http:HttpClient,
  ) { }
  ngOnInit(): void {
    this.getAllRole().subscribe(async (data:any)=>{
      await data.forEach((roleObject:any)=>this.role.push(roleObject));
      console.log(this.role);
    });
  }

  getAllRole(){
    return this.http.get(`${environment.renderApiLink}/api/role`)
  }
  async getUserRole(id:string){
    const userRole:any = await this.role.filter((a)=> a._id == id);
    return userRole
  }
}
