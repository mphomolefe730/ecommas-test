import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Guid } from 'guid-typescript';
import { confirmPasswordValidator } from './confirmPassword';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';
import { userModel } from 'src/app/models/userModel';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.scss']
})

export class SignupLoginComponent implements OnInit {
  signupForm: any;
  formSubmitted: boolean = false;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(
    private router: ActivatedRoute,
    private userService: UserService,
    private toastcontroller: ToastController,
  ){}

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      id: new FormControl(Guid.create().toString()),
      role: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      businessName: new FormControl('', Validators.required),
      businessDescription: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      number: new FormControl('', [ 
        Validators.required, 
        Validators.pattern(/^-?(0|[0-9]\d*)?$/),
        Validators.maxLength(10), 
        Validators.minLength(10),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&?*])[a-zA-Z\d!@#$%^&?*]+$/),
      ]),
      confirmPassword: new FormControl('', Validators.required)
    }, {validators: confirmPasswordValidator.match()});
      
  }

  togglePassword(event: Event) {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }
  toggleConfirmPassword(event: Event) {
    event.preventDefault();
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  async toastAlert(message: string) {
     const toast =  await this.toastcontroller.create({
        message: message,
        duration: 4500,
        position: 'bottom'
     });

     await toast.present();
  }


  onSubmit() {
    this.formSubmitted = true;

    const userModel: userModel = {
      // businessName: this.signupForm.value.businessName,
      // businessDescription: this.signupForm.value.businessDescription,
      hashedPassword: this.signupForm.value.password,
      name: this.signupForm.value.name,
      surname: this.signupForm.value.surname,
      email: this.signupForm.value.email,
      number: this.signupForm.value.number,
      role: this.signupForm.value.role,
    };

    if (this.signupForm.valid) {
      this.userService.createUser(userModel).subscribe((data: any) => {
        this.toastAlert("Account successfully created");
        console.log(data);
      }, error => {
        this.formSubmitted = false;
        this.toastAlert(error);
        console.log(error);
      });
    } else {
      console.log("Failed to create account");
    }

  }

  get email() {
    return this.signupForm.get('email');
  }

  get role() {
    return this.signupForm.get('role');
  }

  get businessName() {
    return this.signupForm.get('businessName');
  }

  get businessDescription() {
    return this.signupForm.get('businessDescription');
  }

  get name() {
    return this.signupForm.get('name');
  }

  get surname() {
    return this.signupForm.get('surname');
  }

  get number() {
    return this.signupForm.get('number');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
}
