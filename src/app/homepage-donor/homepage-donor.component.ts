import { Component, OnInit, ViewChild } from '@angular/core';
import {Donation} from '../DonationDTO/donation';
import {AuthService, SocialUser} from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LocationForDonating} from '../DonationDTO/location';
import {DonationForm} from '../DonationDTO/DonationForm';
import { DonationCentersService} from '../donation-centers.service';
import {DonationsService} from '../donations.service';
import {ModalDirective} from 'angular-bootstrap-md';

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
  donationId: string;
  lastDonationTime: string = "";
  failMessage: string;
  @ViewChild('frameSuccess') frameSuccess: ModalDirective;
  @ViewChild('frameFail') frameFail: ModalDirective;


  ngOnInit() {
    this.view = 'form';

    this.donationsForm = new DonationForm();
    this.getDonationsClinics();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (user != null) {
        this.donationService.getLastDonationTime(this.user).subscribe(
          (res) => {
            window.console.log("You last donated");
            window.console.log(res);
            this.lastDonationTime = res.last_donated;
          });
        this.getLastDonations();
      }
    });

    if (!this.loggedIn) {
      // DON'T FORGET TO UNCOMMENT THIS
      // this.router.navigate(["/welcome"]);
    }
  }
  changeToForm(): void {
    this.view = 'form';
  }
  changeToLastDonations(): void {
    this.view = 'lastDonations';
  }
  isForm(): boolean {
    if (this.view === 'form')
      return true;
    else
      return false;
  }

  isLastDonations(): boolean {
    if (this.view === 'lastDonations')
      return true;
    else
      return false;
  }
  getLastDonations(): void {
    this.donationService.getLastDonations(this.user).subscribe(
      (res) => {
        this.lastDonations = res;
      }
    );
  }
  getDonationsClinics(): void {
    this.donationCenterService.getDonationCenters().subscribe(res => this.locations = res);
  }

  submitDonationForm(): void {
    this.donationService.sendDonorFormular(this.donationsForm,this.user).subscribe(
      res => {
        this.donationsForm = new DonationForm();
        // @ts-ignore
        this.donationId = res.token;
        this.frameSuccess.show();
      },
    err => {
        window.console.log(err);
        this.failMessage = err.error.message;
        this.frameFail.show();
    });
  }
}
