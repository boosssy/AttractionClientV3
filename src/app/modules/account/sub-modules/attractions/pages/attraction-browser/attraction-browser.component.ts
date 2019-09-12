import {Component, OnInit} from '@angular/core';
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

  tmpPlaceId = 0;
  tmpPlaceName = '';
  tmpCapacity = '';
  isVisibleCity = true;
  isVisibleAttraction = false;
  isVisibleNotFoundMsg = false;

  constructor(private mainService: MainSevice) {
  }

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
    this.mainService.findAllAttractionsWithKnapsackAlgorithm(this.tmpPlaceName, this.tmpCapacity).subscribe(data => {
      this.attractions = data;
    });
    if (!this.attractions || !this.checkAttractionLenght()) {
      this.isVisibleNotFoundMsg = true;
    } else {
      this.isVisibleNotFoundMsg = false;
    }
  }

  checkAttractionLenght(): boolean {
    if (this.attractions.length < 1) {
      return true;
    } else {
      return false;
    }

  }

  back() {
    this.isVisibleCity = true;
    this.isVisibleAttraction = false;
    this.isVisibleNotFoundMsg = false;
    this.tmpPlaceName = '';
    this.tmpPlaceId = 0;
    this.tmpCapacity = '';
    this.attractions = [];
  }

  validConfirmCity() {
    if (this.tmpPlaceName !== '') {
      return true;
    }
  }

  validConfirmCapacity() {
    if (this.tmpCapacity !== '') {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.mainService.findAllPlaces().subscribe(data => {
      this.places = data;
    });
  }
}
