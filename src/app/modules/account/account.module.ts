import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
// @ts-ignore
import {AttractionsModule} from './sub-modules/attractions/attractions.module';
import {AccountInformationModule} from './sub-modules/account-information/account-information.module';
import {Transaction} from '../../core/model/Transaction';
import {TransactionViewComponent} from './sub-modules/transaction/pages/transactionView/transaction-view.component';
import {TransactionModule} from './sub-modules/transaction/transaction.module';

@NgModule({
  declarations: [AccountComponent, TransactionViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AttractionsModule,
    AccountInformationModule,
    TransactionModule
  ]
})
export class AccountModule { }
