import {Component, OnInit} from '@angular/core';
import {MainSevice} from './core/sevice/MainSevice';
import {Attraction} from './core/model/Attraction';
import {Place} from './core/model/Place';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // session = Session.Instance;
  constructor(private mainService: MainSevice) {
  }

  ngOnInit(): void {
  }
}
