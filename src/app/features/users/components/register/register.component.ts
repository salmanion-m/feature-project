import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  fieldRequired: string = "This field is required"
  hide = true;
  loading = false;


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
      password: new FormControl(null, [Validators.required])
    })
  }

  register() {
    console.log(this.registerForm.value)
    if (this.registerForm.invalid) {
      return
    }
    this.loading = true;
    this.userService.registers(this.registerForm.value).subscribe(data => {
      this.router.navigate(['/dashbord'])
    })
  }

}
