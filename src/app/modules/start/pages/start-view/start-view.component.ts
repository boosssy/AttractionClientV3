import { Component, OnInit } from '@angular/core';
import {MainSevice} from '../../../../core/sevice/MainSevice';
import {Attraction} from '../../../../core/model/Attraction';
import {SessionUser} from '../../../../core/model/SessionUser';

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.css']
})
export class StartViewComponent implements OnInit {
  private status: true;
  sessionUser: SessionUser;


  attractions: Attraction[];
  attraction: Attraction;

  constructor(private  mainService: MainSevice) {
  }

  ngOnInit() {
    this.mainService.findAllAttractions().subscribe(data => {
      this.attractions = data;
    });

    this.mainService.findAttractionByAttractiveness(this.attraction).subscribe(data => {
      this.attraction = data;
    });
    this.sessionUser = new SessionUser();
    this.mainService.findSessionUserById('1').subscribe( data => {
      this.sessionUser = data;
    });
  }
}
