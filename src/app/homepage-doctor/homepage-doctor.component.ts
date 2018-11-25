import {Component, Input, OnInit} from '@angular/core';
import {DonationStatus} from '../DonationDTO/donation-status';
import {DonationsStatusMock} from '../DonationDTO/donations-status-mock';
import {LocationForDonating} from '../DonationDTO/location';
import {Location_Mock} from '../DonationDTO/location-mock';
import {BloodRequest} from '../DonationDTO/blood-request';

@Component({
  selector: 'app-homepage-doctor',
  templateUrl: './homepage-doctor.component.html',
  styleUrls: ['./homepage-doctor.component.scss']
})
export class HomepageDoctorComponent implements OnInit {

  constructor() { }
  view: string;
  donationStatus: DonationStatus[];
  locations: LocationForDonating[];
  bloodRequest: BloodRequest;

  ngOnInit() {
    this.view = "donationsStatus";
    this.getDonationsStatus();
    this.getLocations();
    this.bloodRequest = new BloodRequest();
  }

  changeToForm():void {
    this.view = "form";
  }
  changeToDonationsStatus():void {
    this.view = "donationsStatus";
  }
  isForm(): boolean {
    if (this.view === "form")
      return true;
    else
      return false;
  }

  isLastDonations(): boolean {
    if (this.view === "donationsStatus")
      return true;
    else
      return false;
  }
  getDonationsStatus(): void {
    this.donationStatus = DonationsStatusMock;
  }
  getLocations(): void {
    this.locations = Location_Mock;
  }

  submitBloodRequest():void {
    window.console.log(this.bloodRequest);
  }
}
