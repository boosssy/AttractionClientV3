import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';
import {User} from '../../../../../../core/model/User';
import {AuthorizationsService} from '../../../../../../core/sevice/authorizations.service';
import {MainSevice} from '../../../../../../core/sevice/MainSevice';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  title = 'Angular Socio login via Facebook!';
  users: User[];
  tmpUser: User;
  user: any;
  showButtonLoginFb = false;
  showButtonLogoutFb = true;
  hiddenButtonLoginFb = true;
  hiddenButtonLogoutFb = false;
  status = false;

  @Output()
  eventStat = new EventEmitter<boolean>();

  constructor(private socioAuthServ: AuthService,
              private authoService: AuthorizationsService,
              private mainService: MainSevice) {
    this.tmpUser = new User();
  }


  signIn(platform: string): void {
    this.showButtonLoginFb = true;
    this.showButtonLogoutFb = false;
    this.hiddenButtonLoginFb = false;
    this.hiddenButtonLogoutFb = true;

    platform = FacebookLoginProvider.PROVIDER_ID;
    this.socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + ' logged in user data is= ', response);
        this.user = response;
      }
    );
  }

  login(status: boolean) {
    let i: number;
    for (i = 0; i < this.users.length; i++)  {
      if ( this.tmpUser.userName === this.users[i].userName ) {
        if (this.tmpUser.password === this.users[i].password) {
          this.status = status;
        }
      }
    }
    if (this.status) {
      location.assign('/account');
      // console.log('status login=' +this.status);
    } else {
      location.assign('/failed');
      // console.log('status off=' +this.status);
    }
  }

  // Method to log out.
  signOut(status: boolean): void {
    this.showButtonLoginFb = false;
    this.showButtonLogoutFb = true;
    this.hiddenButtonLoginFb = true;
    this.hiddenButtonLogoutFb = false;
    this.status = status;
    this.socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }

  signup() {
    location.assign('/registration');
  }

  send(stat) {
    this.eventStat.emit(this.status);
  }
  ngOnInit() {
    this.mainService.findAllUsers().subscribe( data => {
      this.users = data;
    });
  }

}
