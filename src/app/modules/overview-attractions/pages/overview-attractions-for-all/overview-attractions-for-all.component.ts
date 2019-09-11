import {Component, Input, OnInit} from '@angular/core';
import {Attraction} from '../../../../core/model/Attraction';
import {Place} from '../../../../core/model/Place';
import {MainSevice} from '../../../../core/sevice/MainSevice';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-overview-attractions',
  templateUrl: './overview-attractions-for-all.component.html',
  styleUrls: ['./overview-attractions-for-all.component.css']
})
export class OverviewAttractionsForAllComponent implements OnInit {

  attractions: Attraction[];
  places: Place[];

  tmpPlaceId: string;
  tmpPlaceName: string;
  isVisibleCity = true;
  isVisibleAttraction = false;

  constructor(private mainService: MainSevice) { }

  setPlaceParameters(place: Place) {
    this.tmpPlaceId = place.id.toString();
    this.tmpPlaceName = place.city;
  }

  confirmCity() {
    this.isVisibleCity = false;
    this.isVisibleAttraction = true;
    this.mainService.findAllAttractionsByPlaceId(this.tmpPlaceId).subscribe( data => {
      this.attractions = data;
    });
  }

  back() {
    this.isVisibleCity = true;
    this.isVisibleAttraction = false;
  }

  ngOnInit() {
    this.mainService.findAllPlaces().subscribe( data => {
      this.places = data;
    });
  }

}
