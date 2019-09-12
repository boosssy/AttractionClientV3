import { Component, OnInit } from '@angular/core';
import {MainSevice} from '../../../../core/sevice/MainSevice';

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.css']
})
export class StartViewComponent implements OnInit {
  private status: true;
  // session: Session;

  constructor(private mainService: MainSevice) { }

  ngOnInit() {
    // this.session = Session.getInstance();
  }

}
