import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../../../core/model/Transaction";
import {Attraction} from "../../../../core/model/Attraction";
import {MainSevice} from "../../../../core/sevice/MainSevice";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[];
  attractions: Attraction[];

  constructor(private mainService: MainSevice) { }

  ngOnInit(){
    this.mainService.findAllTransaction().subscribe(data => {
      this.transactions = data;
    });

    this.mainService.findAllAttractions().subscribe(data => {
      this.attractions = data;
    });
  }

}
