import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  fieldRequired: string = "This field is required"
  hide = true;
  loading = false;
  isInValid: boolean = true;

  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UsersService,
  ) {
  }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm() {
    this.registerForm = this.fb.group({
        userName: new FormControl(null, [Validators.required]),
        // password: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required,Validators.maxLength(6),Validators.minLength(3)]),
        confirmPassword:new FormControl (null , [Validators.required,Validators.maxLength(6),Validators.minLength(3)])
      },
      // {
      //   validator: this.matchPasswords('password', 'confirmPassword')
      // }
    );
  }

  error_messages = {
    'userName': [
      {type: 'required', message: 'User Name is required.'},
    ],
    'password': [
      {type: 'required', message: 'password is required.'},
      {type: 'minlength', message: 'password 3 length.'},
      {type: 'maxlength', message: 'password 6 length.'}
    ],
    'confirmPassword': [
      {type: 'required', message: 'password is required.'},
      {type: 'minlength', message: 'password length.'},
      {type: 'maxlength', message: 'password length.'}
    ],
  }

  register() {
    console.log('1', this.registerForm.value)
    if (this.registerForm.invalid) {
      return
      console.log('registerForm:', this.registerForm.value)
    }
    this.loading = true;
    // this.userService.registers(this.registerForm.value).subscribe(data => {
    //   this.router.navigate(['/dashbord'])
    // })
  }


  // private matchPasswords(passwordKey: string, confirmPasswordKey: string) {
  //   // console.log('passwordKey:',passwordKey,'confirmPasswordKey:',confirmPasswordKey)
  //   return (group: FormGroup) => {
  //     let password = group.controls[passwordKey];
  //     let confirmPassword = group.controls[confirmPasswordKey];
  //     if (password.value !== confirmPassword.value) {
  //       return confirmPassword.setErrors({ notMatched: true });
  //       console.log('notMatched')
  //     }
  //   };
  // }
  user: any;


}
