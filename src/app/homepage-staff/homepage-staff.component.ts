import { Component, OnInit } from '@angular/core';
import {LocationForDonating} from '../DonationDTO/location';
import {Location_Mock} from '../DonationDTO/location-mock';
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
    this.locations = Location_Mock;
  }
  uploadDonation(): void {
    window.console.log(this.donationUpload);
  }
}
