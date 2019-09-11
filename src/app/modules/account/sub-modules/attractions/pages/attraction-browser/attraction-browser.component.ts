import { Component, OnInit } from '@angular/core';
import {MainSevice} from '../../../../../../core/sevice/MainSevice';
import {Attraction} from '../../../../../../core/model/Attraction';
import {Place} from '../../../../../../core/model/Place';

@Component({
  selector: 'app-attraction-browser',
  templateUrl: './attraction-browser.component.html',
  styleUrls: ['./attraction-browser.component.css']
})
export class AttractionBrowserComponent implements OnInit {

  attractions: Attraction[];
  places: Place[];
  place: Place;
  attraction: Attraction;

  tmpPlaceId: number;
  tmpPlaceName: string;
  tmpCapacity: string;
  isVisibleCity = true;
  isVisibleAttraction = false;

  constructor(private mainService: MainSevice) { }

  setPlaceParameters(place: Place) {
    this.tmpPlaceId = place.id;
    this.tmpPlaceName = place.city;
    this.place = place;

  }

  confirmCity() {
    this.isVisibleCity = false;
    this.isVisibleAttraction = true;
  }

  confirmCapacity() {
    this.mainService.findAllAttractionsWithKnapsackAlgorithm(this.tmpPlaceName, this.tmpCapacity).subscribe( data => {
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
