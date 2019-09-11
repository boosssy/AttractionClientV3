import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
// @ts-ignore
import {AttractionsModule} from './sub-modules/attractions/attractions.module';
import {AccountInformationModule} from './sub-modules/account-information/account-information.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AttractionsModule,
    AccountInformationModule
  ]
})
export class AccountModule { }
