import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {MainSevice} from '../../../../../../core/sevice/MainSevice';
import {Attraction} from '../../../../../../core/model/Attraction';
import {Place} from '../../../../../../core/model/Place';

declare let paypal: any;

@Component({
  selector: 'app-attraction-browser',
  templateUrl: './attraction-browser.component.html',
  styleUrls: ['./attraction-browser.component.css']
})
export class AttractionBrowserComponent implements OnInit, AfterViewChecked {

  constructor(private mainService: MainSevice) {
  }

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

  addScript = false;
  paypalLoad = true;

  finalAmount = 100;



  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'ATUQBBbgPGkHTSVjQMCUuhatJxdAuKqnRuQb7MAd7IPbRTtfwNyvPb4AHyYR2amUlm4D8q80ZW97tFp-',
      production: 'EC9PFrUAojlltMTcmE8suj1HutFRma7MnirL-1JbRsLrkVNZxjPjvHwaYWJJz77E-5CW25FM2gZmV1nt'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'PLN' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        // Do something when payment is successful.
      });
    }
  };

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

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      });
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }

}
