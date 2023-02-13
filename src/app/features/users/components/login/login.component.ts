import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {UsersService} from "../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  subscription: Subscription[] = [];


  constructor(private fb: FormBuilder,
              private router : Router,
              private userService: UsersService ) {
  }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm() {
    this.loginForm = this.fb.group({
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }


  onSubmit( ){
    if(this.loginForm.invalid){
      return
    }
    this.userService.Login(this.loginForm.value).subscribe((response: any)=> {
      localStorage.setItem('token',response.token)
      this.router.navigate(['/dashbord/link'])
    })
  }

}
