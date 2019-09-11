import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginModule} from './sub-modules/login/login.module';
import {LogoutModule} from './sub-modules/logout/logout.module';
import {RegistrationModule} from './sub-modules/registration/registration.module';
import {FormComponent} from './form.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginModule,
    LogoutModule,
    RegistrationModule,
    RouterModule
  ]
})
export class FormModule { }
