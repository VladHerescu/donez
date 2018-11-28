import { Component, OnInit } from '@angular/core';
import {Donation} from '../DonationDTO/donation';
import {Donations_mock} from '../DonationDTO/donations-mock';
import {AuthService, SocialUser} from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Location_Mock} from '../DonationDTO/location-mock';
import {LocationForDonating} from '../DonationDTO/location';
import {DonationForm} from '../DonationDTO/DonationForm';
import { DonationCentersService} from '../donation-centers.service';
import {DonationsService} from '../donations.service';

@Component({
  selector: 'app-homepage-donor',
  templateUrl: './homepage-donor.component.html',
  styleUrls: ['./homepage-donor.component.scss']
})
export class HomepageDonorComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router, public donationCenterService: DonationCentersService, private donationService: DonationsService) { }

  private user: SocialUser;
  private loggedIn: boolean;

  lastDonations: Donation[];
  locations: LocationForDonating[];
  view: string;
  donationsForm: DonationForm;

  ngOnInit() {
    this.view = "form";

    this.lastDonations = Donations_mock;
    this.donationsForm = new DonationForm();
    this.getDonationsClinics();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    if (!this.loggedIn) {
      // DON'T FORGET TO UNCOMMENT THIS
      // this.router.navigate(["/welcome"]);
    }
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
  getDonationsClinics(): void {
    this.donationCenterService.getDonationCenters().subscribe(res => this.locations = res);
  }

  submitDonationForm(): void {
    this.donationService.sendDonorFormular(this.donationsForm,this.user).subscribe(
      res => {
        this.donationsForm = new DonationForm();
        window.console.log(res);
      })
  }
}
