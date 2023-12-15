import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private userSvc: AuthService){}

  onLogin(){
    const user = {
      "username": "fermastro@gmail.com",
      "password": "123456"
    }
    const logged = this.userSvc.login(user)
    console.log(logged);
  }

}
