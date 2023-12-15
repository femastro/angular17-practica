import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.interfaces';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  async login(user: User){
    const res = await this.http.post('http://localhost:3000/login', user);
    return res;
  }


}
