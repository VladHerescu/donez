import {Component, Input, OnInit} from '@angular/core';
import {DonationStatus} from '../DonationDTO/donation-status';
import {LocationForDonating} from '../DonationDTO/location';
import {BloodRequest} from '../DonationDTO/blood-request';
import {DonationsService} from '../donations.service';

@Component({
  selector: 'app-homepage-doctor',
  templateUrl: './homepage-doctor.component.html',
  styleUrls: ['./homepage-doctor.component.scss']
})
export class HomepageDoctorComponent implements OnInit {

  constructor(private donationService: DonationsService) { }
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
    this.donationService.getAllDonationsForDoctor().subscribe(
      (res) => {
        this.donationStatus = res
      }
    )
  }
  getLocations(): void {

  }

  submitBloodRequest():void {
    window.console.log(this.bloodRequest);
  }
}
