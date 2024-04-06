import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { userModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit{
  userInformation:userModel={
    businessName: '',
    businessDescription: '',
    hashedPassword: '',
    name: '',
    surname: '',
    email: '',
    number: 0,
    role: {
      id:'',
      name:''
    }
  };

  userForm:FormGroup= new FormGroup({
    businessName:new FormControl(''),
    businessDescription:new FormControl(''),
    name:new FormControl(''),
    surname:new FormControl(''),
    email:new FormControl(''),
    number:new FormControl(''),
  })

  constructor(
    private authService:AuthService,
  ){}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.authService.loggedInUser.subscribe(async (data)=>{
        this.userInformation.name = await data.name;
        // this.userInformation.id = await data.userId;
      })
    }
  }
}
