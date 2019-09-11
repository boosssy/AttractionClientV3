import { Component, OnInit } from '@angular/core';
import {until} from "selenium-webdriver";
import titleIs = until.titleIs;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // todo pobrac status z login-form.component.ts
  status:boolean;

  constructor() { }
  dawaj($event) {
    this.status = $event;
  }
  ngOnInit() {
    console.log(this.status);
  }

}
