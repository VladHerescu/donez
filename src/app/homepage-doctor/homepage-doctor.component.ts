import {Component, Input, OnInit} from '@angular/core';
import {DonationStatus} from '../DonationDTO/donation-status';
import {DonationsStatusMock} from '../DonationDTO/donations-status-mock';

@Component({
  selector: 'app-homepage-doctor',
  templateUrl: './homepage-doctor.component.html',
  styleUrls: ['./homepage-doctor.component.scss']
})
export class HomepageDoctorComponent implements OnInit {

  constructor() { }
  view: string;
  donationStatus: DonationStatus[];

  ngOnInit() {
    this.view = "donationsStatus";
    this.getDonationsStatus();
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
}
