import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormGroup = new FormGroup({
    email : new FormControl('', [Validators.required]),
    user_type : new FormControl(1),
    firstname : new FormControl('', [Validators.required]),
    lastname : new FormControl('', [Validators.required]),
    dialing_code : new FormControl('', [Validators.required]),
    mobile : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
    confirm_password : new FormControl(),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    terms: new FormControl(1),
    user_profile_type: new FormControl(1),
    device_type: new FormControl('web'),
    referral_code: new FormControl(''),
    
  })
  setRegisterForm = true;
  extra_data: any;
  message: any;
  validateFormGroup = new FormGroup({
    otp : new FormControl()
  })
  constructor(private authService: AuthService, private route:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.registerFormGroup.value).subscribe(res =>{
      if(res['status'] === 1){
       this.setRegisterForm = false;
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
    this.authService.validateRegisterOTP(data).subscribe(res =>{
      this.message = res['message'];
      this.route.navigate['login'];
     })
  }
}
