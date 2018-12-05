import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DonationStatus} from '../DonationDTO/donation-status';
import {LocationForDonating} from '../DonationDTO/location';
import {BloodRequestDTO} from '../DonationDTO/blood-requestDTO';
import {DonationsService} from '../donations.service';
import {DonationCentersService} from '../donation-centers.service';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-homepage-doctor',
  templateUrl: './homepage-doctor.component.html',
  styleUrls: ['./homepage-doctor.component.scss']
})
export class HomepageDoctorComponent implements OnInit {

  constructor(private donationService: DonationsService, private donationCenterService: DonationCentersService) { }
  view: string;
  donationStatus: DonationStatus[];
  locations: LocationForDonating[];
  bloodRequest: BloodRequestDTO;
  failMessage: string;
  @ViewChild('frameSuccess') frameSuccess: ModalDirective;
  @ViewChild('frameFail') frameFail: ModalDirective;

  ngOnInit() {
    this.view = "donationsStatus";
    this.getDonationsStatus();
    this.getLocations();
    this.bloodRequest = new BloodRequestDTO();
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
    this.donationCenterService.getDonationCenters().subscribe(res => this.locations = res);
  }

  submitBloodRequest():void {
    window.console.log(this.bloodRequest);
    this.donationService.submitBloodRequest(this.bloodRequest).subscribe(
      res => {
        window.console.log(res);
        this.bloodRequest = new BloodRequestDTO();
        this.frameSuccess.show();
      },
      err => {
        window.console.log(err);
        this.failMessage = err.error.message;
        this.frameFail.show();
      }
    )
  }
}
