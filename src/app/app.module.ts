import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageDonorComponent } from './homepage-donor/homepage-donor.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageDoctorComponent } from './homepage-doctor/homepage-doctor.component';
import { HomepageStaffComponent } from './homepage-staff/homepage-staff.component';
import { FormsModule} from '@angular/forms';
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { HomepageAdminComponent } from './homepage-admin/homepage-admin.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("117464560904-nskfkua0h90g7tbkpce4b5l8c5f6vgti.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1966659770076856")
  }
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    HeaderComponent,
    FooterComponent,
    HomepageDonorComponent,
    HomepageDoctorComponent,
    HomepageStaffComponent,
    HomepageAdminComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
