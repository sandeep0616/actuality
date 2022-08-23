import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient) { }
  baseUrl = environment.url;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  login(formData: any){
    return this.httpClient.post(this.baseUrl + 'login',formData, {headers:this.headers})
  }

  validateLoginOTP(formData: any){
    return this.httpClient.post(this.baseUrl + 'validate-login-otp',formData, {headers:this.headers})
  }

  register(formData: any){
    return this.httpClient.post(this.baseUrl + 'register',formData, {headers:this.headers})
  }

  validateRegisterOTP(formData: any){
    return this.httpClient.post(this.baseUrl + 'validate-registration-otp',formData, {headers:this.headers})
  }
}
