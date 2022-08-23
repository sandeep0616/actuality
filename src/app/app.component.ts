import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aarnatech';

  constructor(private route:Router){
    
  }
  redirectLogin(){
    this.route.navigate['/login'];
  }

  redirectRegister(){
    this.route.navigate['/register'];
  }
}
