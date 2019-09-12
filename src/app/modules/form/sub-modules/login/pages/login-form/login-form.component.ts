import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';
import {User} from '../../../../../../core/model/User';
import {AuthorizationsService} from '../../../../../../core/sevice/authorizations.service';
import {MainSevice} from '../../../../../../core/sevice/MainSevice';
import {SessionUser} from '../../../../../../core/model/SessionUser';



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

  // login
  status = false;
  // sessionUser: SessionUser;
  // session: Session = Session.Instance;

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

  login() {
    let i: number;
    for (i = 0; i < this.users.length; i++)  {
      if ( this.tmpUser.userName === this.users[i].userName ) {
        if (this.tmpUser.password === this.users[i].password) {
          this.status = true;
          this.tmpUser.id = this.users[i].id;
          break;
        }
      }
    }
    if (this.status) {
      // location.assign('/account/about-you');
      this.mainService.setStatusUser(true);
      // this.session.setStatus(true);
      // this.sessionUser = new SessionUser();
      let newSessionUser = new SessionUser();
      newSessionUser.status = true;
      // pobranie uzytkownika z bazy o danym id i zpais do user
      console.log('id=' + this.tmpUser.id);
      // newSessionUser.user = null;
      this.mainService.findUserById(this.tmpUser.id.toString()).subscribe( data => {
        newSessionUser.user.id = data.id;
        newSessionUser.user.name = data.name;
        newSessionUser.user.surname = data.surname;
        newSessionUser.user.userName = data.userName;
        newSessionUser.user.password = data.password;
        newSessionUser.user.passwordConfirm = data.passwordConfirm;
      });
      // console.log(newSessionUser.user.name);
      this.mainService.editSessionUser(newSessionUser, '1').subscribe( result => this.goToAccountStart());
      console.log(newSessionUser.user + ' : ' + newSessionUser.status);
    } else {
      location.assign('/failed-login');
      // console.log('status off=' +this.status);
    }
  }

  goToAccountStart() {
    location.assign('/account/about-you');
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

  goToStart() {
  location.assign('/account/start');
  }

  signup() {
    location.assign('/form/registration');
  }

  ngOnInit() {
    this.mainService.findAllUsers().subscribe( data => {
      this.users = data;
    });
  }
}
