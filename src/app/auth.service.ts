import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: BehaviorSubject<any> =new BehaviorSubject(null)

  constructor(private _httpClient: HttpClient, private _router: Router) {
    if (localStorage.getItem("token")) {
      this.savedUser()
    }
  }

  savedUser() {
    let token = JSON.stringify(localStorage.getItem("token"));
    let decoded = jwtDecode(token);
    console.log(decoded);
    this.userData.next(decoded)

  }


  signUp(data:User) : Observable<any> {
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signup', data)
  }
  signIn(data: User): Observable<any> {
    return this._httpClient.post('https://route-egypt-api.herokuapp.com/signin', data)
  }


  logOut() {
    localStorage.removeItem("token");
    this.userData.next(null)
    this._router.navigate(['/login'])
  }
}
