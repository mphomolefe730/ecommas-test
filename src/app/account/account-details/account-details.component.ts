import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
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
    hashedPassword: '',
    name: '',
    profileImage: '',
    surname: '',
    email: '',
    number: 0,
    role: {
      id: '',
      name: ''
    },
    verified: false
  };

  verificationNumbers:FormGroup= new FormGroup({
    otp: new FormControl('')
  });

  userForm:FormGroup= new FormGroup({
    name:new FormControl(this.userInformation.name),
    surname:new FormControl(this.userInformation.surname),
    email:new FormControl(this.userInformation.email),
    number:new FormControl(this.userInformation.number),
  })

  constructor(
    private authService:AuthService,
    private firebaseService:FirebaseService,
    private userService:UserService,
    private router:Router,
    private toaster:NgToastService
  ){}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.authService.loggedInUser.subscribe(async (localData)=>{
        this.userInformation.name = await localData.name;
        this.userId = await localData.userId;
        this.userInformation.profileImage = await this.authService.profileImage;
        this.userForm.value.name = await localData.name
        
        this.userService.getUserById(this.userId).subscribe(async (data:any)=>{
          this.userInformation.name = await data.name;
          this.userInformation.surname = await data.surname;
          this.userInformation.email = await data.email;
          this.userInformation.number = await data.number;
          this.userInformation.verified = await data.verified;
        })
      })
    }
  }
  
  async upload(event:any){
    const newUrlForProfile = await this.firebaseService.upload(event,this.userId,'profile-pictures');
    let object = {profileImage: newUrlForProfile};
    this.userService.updateUser(object,this.userId).subscribe((data:any)=>{
      this.authService.profileImage = data.profileImage;
      this.userInformation.profileImage = data.profileImage;
      sessionStorage.setItem("smartOne_User", JSON.stringify({name: data.name, role:data.role, profileImage:data.profileImage}));
    })
  }
  goBack(){
    this.router.navigate(["/account"])
  }
  verifyOtp(otpValue:any){
    this.userService.verifyAccount(this.userId,otpValue).subscribe({
      next:(object:any)=>{
        this.toaster.success({detail:object.status,summary:object.message});
        this.userInformation.verified=true;
      },
      error:(error:any)=>{
        this.toaster.error({detail:error.error.status,summary:error.error.message});
      }
    })
  }
}