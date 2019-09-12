import {Component, Input, OnInit, Output} from '@angular/core';
import { LoginFormComponent} from "../../modules/form/sub-modules/login/pages/login-form/login-form.component";
import {SessionUser} from '../../core/model/SessionUser';
import {MainSevice} from '../../core/sevice/MainSevice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  sessionUser: SessionUser;

  constructor(private mainService: MainSevice) {
  }

  backToStart() {
    location.assign('/form/logout');
  }

  ngOnInit() {
    this.mainService.findSessionUserById('1').subscribe(data => {
      this.sessionUser = data;
    });
  }

}
