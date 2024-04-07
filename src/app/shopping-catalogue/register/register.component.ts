import { AfterViewInit, Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { confirmPasswordValidator } from './confirmPassword';
import { UserService } from 'src/app/services/user.service';
import { userModel } from 'src/app/models/userModel';
import { RoleService } from 'src/app/services/role.service';

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
  rolesSelector:{_id:string,role:string}[]=[];

  constructor(
    private userService: UserService,
    private roleService:RoleService,
  ){}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
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
      businessName: this.signupForm.value.businessName,
      businessDescription: this.signupForm.value.businessDescription,
      hashedPassword: this.signupForm.value.password,
      name: this.signupForm.value.name,
      surname: this.signupForm.value.surname,
      email: this.signupForm.value.email,
      number: this.signupForm.value.number,
      role: this.signupForm.value.role,
      profileImage:''
    };

    if (this.signupForm.valid) {
      this.userService.createUser(userModel).subscribe((data: any) => {
        console.log(data);
      }, error => {
        this.formSubmitted = false;
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
