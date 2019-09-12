import { Component, OnInit } from '@angular/core';
import {MainSevice} from '../../../../../../core/sevice/MainSevice';
import {SessionUser} from '../../../../../../core/model/SessionUser';

@Component({
  selector: 'app-logout',
  templateUrl: './logout-form.component.html',
  styleUrls: ['./logout-form.component.css']
})
export class LogoutFormComponent implements OnInit {

  constructor(private mainService: MainSevice) {
  }

  ngOnInit() {
    let newSessionUser = new SessionUser();
    newSessionUser.status = false;
    this.mainService.editSessionUser(newSessionUser, '1').subscribe();
  }
}
