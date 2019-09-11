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
  title = 'Kraina atrakcji';
  attractions: Attraction[];
  places: Place[];

  constructor(private mainService: MainSevice) {
  }

  ngOnInit(): void {
    this.mainService.findAllAttractions().subscribe( data => {
      this.attractions = data;
    });
    this.mainService.findAllPlaces().subscribe( data => {
      this.places = data;
    });
  }
}
