import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SuccessfulOperationPageComponent } from './pages/successful-operation-page/successful-operation-page.component';
import { FailedOperationPageComponent } from './pages/failed-operation-page/failed-operation-page.component';
import { SuccessfulLoginComponent } from './pages/successful-login/successful-login.component';
import { FailedLoginComponent } from './pages/failed-login/failed-login.component';

@NgModule({
  declarations: [PageNotFoundComponent, SuccessfulOperationPageComponent, FailedOperationPageComponent, SuccessfulLoginComponent, FailedLoginComponent],
  imports: [
    CommonModule
  ]
})
export class ExceptionsModule { }
