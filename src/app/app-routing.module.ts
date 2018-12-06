import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';
import {HomepageDonorComponent} from './homepage-donor/homepage-donor.component';
import {HomepageDoctorComponent} from './homepage-doctor/homepage-doctor.component';
import {HomepageStaffComponent} from './homepage-staff/homepage-staff.component';
import {HomepageAdminComponent} from './homepage-admin/homepage-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeScreenComponent},
  { path: 'homepage-donor', component: HomepageDonorComponent},
  { path: 'homepage-doctor', component: HomepageDoctorComponent},
  { path: 'homepage-staff', component: HomepageStaffComponent},
  { path: 'homepage-admin', component: HomepageAdminComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
