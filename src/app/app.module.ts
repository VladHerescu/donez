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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    HeaderComponent,
    FooterComponent,
    HomepageDonorComponent,
    HomepageDoctorComponent,
    HomepageStaffComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
