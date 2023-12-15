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

  public logged: any;
  
  constructor(private userSvc: AuthService){}

  async onLogin(){
    const user = {
      "username": "femastro@gmail.com",
      "password": "123456"
    };
    (await this.userSvc.login(user)).subscribe(arg => this.logged = arg);
    console.table(this.logged);
  }
}
