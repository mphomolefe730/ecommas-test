import { AfterViewInit, Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { confirmPasswordValidator } from './confirmPassword';
import { UserService } from 'src/app/services/user.service';
import { userModel } from 'src/app/models/userModel';
import { RoleService } from 'src/app/services/role.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit, AfterViewInit {
  signupForm: any;
  formSubmitted: boolean = false;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  defaultProfilePicture:string = 'https://firebasestorage.googleapis.com/v0/b/ecommerce-connect-c7850.appspot.com/o/profile-pictures%2F66afc3eb06c2285b78ae1f84?alt=media&token=868d22bd-fce2-49f8-8c4b-af5be6cabfb9'
  progressLoader = '../../../assets/icons/loader.gif';
  rolesSelector:{_id:string,role:string}[]=[];

  constructor(
    private userService: UserService,
    private roleService:RoleService,
    private toaster:NgToastService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      role: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
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
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$=%^&?*])[a-zA-Z\d!@#$=%^&?*]+$/),
      ]),
      confirmPassword: new FormControl('', Validators.required)
    }, {validators: confirmPasswordValidator.match()});
  }

  async ngAfterViewInit(): Promise<void> {
    setTimeout(async ()=>{
      await this.roleService.role.forEach((role)=>{
        if (role.role != "admin") this.rolesSelector.push(role);
      }) 
    },2500)
  }

  togglePassword(event: Event) {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }
  
  toggleConfirmPassword(event: Event) {
    event.preventDefault();
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }



  onSubmit() {
    this.formSubmitted = true;

    const userModel: userModel = {
      hashedPassword: this.signupForm.value.password,
      name: this.signupForm.value.name,
      surname: this.signupForm.value.surname,
      email: this.signupForm.value.email,
      number: this.signupForm.value.number,
      role: this.signupForm.value.role,
      profileImage: this.defaultProfilePicture,
      verified: false
    };

    if (this.signupForm.valid) {
      this.formSubmitted = true;
      this.userService.createUser(userModel).subscribe({
        next: (data: any) => {
          this.formSubmitted = false;
          this.toaster.success({detail: "SUCCESS",summary: "Account succesfully created"});
          this.router.navigate(["/sign-in"])
        }, 
        error:(error) => {
          this.formSubmitted = false;
          this.toaster.error({detail: "Error",summary: error.error.message});
        }
      });
    } else {
      this.formSubmitted = false;
      this.toaster.error({detail: "Error",summary: `Failed to create account, please ensure fields are filled`,duration:5000});
    }

  }

  get email() {
    return this.signupForm.get('email');
  }

  get role() {
    return this.signupForm.get('role');
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