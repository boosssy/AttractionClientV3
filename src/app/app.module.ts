import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { ContentComponent } from './layouts/content/content.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormModule} from './modules/form/form.module';
import {ExceptionsModule} from './modules/exceptions/exceptions.module';
import {FormsModule} from '@angular/forms';
import {AuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import {AuthorizationsService} from './core/sevice/authorizations.service';
import {OverviewAttractionsModule} from './modules/overview-attractions/overview-attractions.module';
import {ContactModule} from './modules/contact/contact.module';
import { MenuAccountComponent } from './layouts/menu-account/menu-account.component';
import {StartModule} from './modules/start/start.module';
import {AboutUsModule} from './modules/about-us/about-us.module';
import {AccountModule} from './modules/account/account.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';


const facebookoauthclientid = '797209834027503';
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(facebookoauthclientid)
  }
]);

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FormModule,
    AppRoutingModule,
    ExceptionsModule,
    OverviewAttractionsModule,
    ContactModule,
    StartModule,
    AboutUsModule,
    AccountModule,
    SocialLoginModule.initialize(config)
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    MenuAccountComponent
  ],
  providers: [
    AuthorizationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
