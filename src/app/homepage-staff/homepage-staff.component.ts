import { Component, OnInit } from '@angular/core';
import {LocationForDonating} from '../DonationDTO/location';
import {Donation} from '../DonationDTO/donation';

@Component({
  selector: 'app-homepage-staff',
  templateUrl: './homepage-staff.component.html',
  styleUrls: ['./homepage-staff.component.scss']
})
export class HomepageStaffComponent implements OnInit {

  constructor() { }

  locations: LocationForDonating[];
  donationUpload: Donation;
  ngOnInit() {
    this.donationUpload = new Donation();
    this.getLocations();
  }
  getLocations(): void {

  }
  uploadDonation(): void {
    window.console.log(this.donationUpload);
  }
}
