import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../../core/model/User';
import {MainSevice} from '../../../../../../core/sevice/MainSevice';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  user: User;

  constructor(private mainService: MainSevice) {
    this.user = new User();
  }

  onSubmit() {
    this.mainService.saveUser(this.user).subscribe( result => this.goToHome());
  }

  goToHome() {
    location.assign('');
  }
  ngOnInit() {
  }

}
