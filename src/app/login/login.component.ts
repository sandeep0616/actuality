import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginFormGroup = new FormGroup({
  email_or_mobile : new FormControl(),
  password: new FormControl(),
  device_type: new FormControl('web'),
})
validateFormGroup = new FormGroup({
  otp : new FormControl()
})
 extra_data : any;
 message: any;
 setLoginForm = true;
  constructor(private authService : AuthService, private route:Router) { }

  ngOnInit(): void {
  }

  loginForm(){    
    this.authService.login(this.loginFormGroup.value).subscribe(res =>{
     if(res['status'] === 1){
      this.setLoginForm = false;
        this.extra_data = res['data'];
        this.message = res['message'];
      }
    })
  }

  submitOTP(){
    let data = {
      ...this.validateFormGroup.value,
      extra_data : JSON.stringify(this.extra_data)
    }
    console.log(data);
    this.authService.validateLoginOTP(data).subscribe(res =>{
      this.message = res['message'];
     })
  }
}
