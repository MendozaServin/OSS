import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService){

  }
  
  enter(){
    console.log(this.user)
    const {email, password} = this.user
    this.authService.register(email, password).then(res => {
      console.log("Se registro: ", res)
    })
  }

}
