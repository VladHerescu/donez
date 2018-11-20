import { Component, OnInit } from '@angular/core';
import {Donation} from '../DonationDTO/donation';
import {Donations_mock} from '../DonationDTO/donations-mock';

@Component({
  selector: 'app-homepage-donor',
  templateUrl: './homepage-donor.component.html',
  styleUrls: ['./homepage-donor.component.scss']
})
export class HomepageDonorComponent implements OnInit {

  constructor() { }

  lastDonations: Donation[];
  view: string;
  ngOnInit() {
    this.view = "form";
    this.lastDonations = Donations_mock;
  }
  changeToForm(): void {
    this.view = "form";
  }
  changeToLastDonations(): void {
    this.view = "lastDonations";
  }
  isForm(): boolean {
    if (this.view === "form")
      return true;
    else
      return false;
  }

  isLastDonations(): boolean {
    if (this.view === "lastDonations")
      return true;
    else
      return false;
  }
}
