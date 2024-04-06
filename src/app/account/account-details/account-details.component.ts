import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { userModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit{
  addIconImage = '../../../assets/icons/addicon.png';

  userId:string='';
  userInformation:userModel={
    businessName: '',
    businessDescription: '',
    hashedPassword: '',
    name: '',
    profileImage:'',
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
    private firebaseService:FirebaseService,
    private userService:UserService
  ){}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.authService.loggedInUser.subscribe(async (data)=>{
        this.userInformation.name = await data.name;
        this.userId = await data.userId;
        this.userInformation.profileImage = await this.authService.profileImage;
      })
    }
  }
  async upload(event:any){
    const newUrlForProfile = await this.firebaseService.upload(event,this.userId,'profile-pictures');
    let object = {profileImage: newUrlForProfile};
    this.userService.updateUser(object,this.userId).subscribe((data:any)=>{
    })
  }
}
