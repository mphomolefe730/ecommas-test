import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.scss']
})
export class SignupLoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({
    email: new FormControl(''),
    hashedPassword: new FormControl('')
  })
  buttonText:string='SIGN-IN';
  progressLoader = '../../../assets/icons/loader.gif';

  constructor(
    private authService:AuthService,
  ){}
  ngOnInit(): void {
    
  }
  signInUser(){
    if(this.loginForm.value) this.authService.logIn(this.loginForm.value);
  }

}