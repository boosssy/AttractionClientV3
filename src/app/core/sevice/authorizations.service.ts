import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationsService {

  constructor() { }


  login(email: string, password: string) {
    console.log(email);
    console.log(password);
  }

  signup(email: string, password: string) {

  }

  logout() {

  }

}
