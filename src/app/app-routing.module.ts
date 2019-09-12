import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './layouts/content/content.component';
import {PageNotFoundComponent} from './modules/exceptions/pages/page-not-found/page-not-found.component';
import {SuccessfulOperationPageComponent} from './modules/exceptions/pages/successful-operation-page/successful-operation-page.component';
import {FailedOperationPageComponent} from './modules/exceptions/pages/failed-operation-page/failed-operation-page.component';
import {SuccessfulLoginComponent} from './modules/exceptions/pages/successful-login/successful-login.component';
import {LoginFormComponent} from './modules/form/sub-modules/login/pages/login-form/login-form.component';
// tslint:disable-next-line:max-line-length
import {OverviewAttractionsForAllComponent} from './modules/overview-attractions/pages/overview-attractions-for-all/overview-attractions-for-all.component';
import {RegistrationFormComponent} from './modules/form/sub-modules/registration/pages/registration-form/registration-form.component';
import {ContactViewComponent} from './modules/contact/pages/contact-view/contact-view.component';
import {LogoutFormComponent} from './modules/form/sub-modules/logout/pages/logout-form/logout-form.component';
import {StartViewComponent} from './modules/start/pages/start-view/start-view.component';
import {AboutUsViewComponent} from './modules/about-us/pages/about-us-view/about-us-view.component';
import {FormComponent} from './modules/form/form.component';
import {AccountComponent} from './modules/account/account.component';
import {AttractionBrowserComponent} from './modules/account/sub-modules/attractions/pages/attraction-browser/attraction-browser.component';
import {AboutUserComponent} from './modules/account/sub-modules/account-information/pages/about-user/about-user.component';
import {FailedLoginComponent} from './modules/exceptions/pages/failed-login/failed-login.component';
import {TransactionViewComponent} from "./modules/account/sub-modules/transaction/pages/transactionView/transaction-view.component";


const parentModuleRoutes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'form',
        component: FormComponent,
        children: [
          {
            path: 'login',
            component: LoginFormComponent
          },
          {
            path: 'registration',
            component: RegistrationFormComponent
          },
          {
            path: 'logout',
            component: LogoutFormComponent
          },
        ]
      },
      {
        path: 'attractions-for-all',
        component: OverviewAttractionsForAllComponent
      },
      {
        path: 'account',
        component: AccountComponent,
        children: [
          {
            path: 'attraction-browser',
            component: AttractionBrowserComponent
          },
          {
            path: 'about-you',
            component: AboutUserComponent
          },
          {
            path: 'transaction',
            component: TransactionViewComponent
          }
        ]
      },
      {
        path: 'contact',
        component: ContactViewComponent
      },
      {
        path: 'start',
        component: StartViewComponent
      },
      {
        path: 'about-us',
        component: AboutUsViewComponent
      },
      {
        path: 'successful-login',
        component: SuccessfulLoginComponent
      },
      {
        path: 'failed-login',
        component: FailedLoginComponent
      },
      {
        path: 'failed',
        component: FailedOperationPageComponent
      },
      {
        path: 'successful',
        component: SuccessfulOperationPageComponent
      },
      {
        path: 'pageNotFound',
        component: PageNotFoundComponent
      },
      {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(parentModuleRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
