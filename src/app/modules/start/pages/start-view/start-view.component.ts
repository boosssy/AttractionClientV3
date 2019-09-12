import { Component, OnInit } from '@angular/core';
import {Attraction} from "../../../../core/model/Attraction";
import {MainSevice} from "../../../../core/sevice/MainSevice";

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.css']
})
export class StartViewComponent implements OnInit {

  attractions: Attraction[];
  attraction: Attraction;

  constructor(private  mainService: MainSevice) { }

  ngOnInit() {
    this.mainService.findAllAttractions().subscribe(data => {
      this.attractions = data;
    });

    this.mainService.findAttractionByAttractiveness(this.attraction).subscribe(data => {
      this.attraction = data;
    });

  }

}
