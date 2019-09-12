import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // session: Session = Session.Instance;

  constructor() {
    // console.log(Session.Instance.getStatus());
  }

  ngOnInit() {
  }

}
