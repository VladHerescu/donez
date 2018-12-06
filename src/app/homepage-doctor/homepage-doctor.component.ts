import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DonationStatus} from '../DonationDTO/donation-status';
import {LocationForDonating} from '../DonationDTO/location';
import {BloodRequestDTO} from '../DonationDTO/blood-requestDTO';
import {DonationsService} from '../donations.service';
import {DonationCentersService} from '../donation-centers.service';
import {ModalDirective} from 'angular-bootstrap-md';
import {SendAnEmailDTO} from '../DonationDTO/sendAnEmailDTO';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage-doctor',
  templateUrl: './homepage-doctor.component.html',
  styleUrls: ['./homepage-doctor.component.scss']
})
export class HomepageDoctorComponent implements OnInit {

  constructor(private donationService: DonationsService, private donationCenterService: DonationCentersService,
              private userService: UsersService, private router: Router) { }
  view: string;
  donationStatus: DonationStatus[];
  locations: LocationForDonating[];
  bloodRequest: BloodRequestDTO;
  sendAnEmailDTO: SendAnEmailDTO;
  failMessage: string;
  @ViewChild('frameSuccess') frameSuccess: ModalDirective;
  @ViewChild('frameFail') frameFail: ModalDirective;

  ngOnInit() {
    this.view = 'donationsStatus';
    this.sendAnEmailDTO = new SendAnEmailDTO();
    this.sendAnEmailDTO.sender = sessionStorage.getItem('userEmail');
    this.getDonationsStatus();
    this.getLocations();
    this.bloodRequest = new BloodRequestDTO();
    if (sessionStorage.getItem('loggedIn') !== 'doctor' && sessionStorage.getItem('loggedIn') !== 'admin')
      this.router.navigate(['/welcome']);
  }

  changeToForm():void {
    this.view = 'form';
  }
  changeToDonationsStatus():void {
    this.view = 'donationsStatus';
  }
  isForm(): boolean {
    if (this.view === 'form')
      return true;
    else
      return false;
  }

  isLastDonations(): boolean {
    if (this.view === 'donationsStatus')
      return true;
    else
      return false;
  }
  getDonationsStatus(): void {
    this.donationService.getAllDonationsForDoctor().subscribe(
      (res) => {
        this.donationStatus = res;
      }
    );
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
    );
  }
  sendEmail(): void {
    window.console.log(this.sendAnEmailDTO);
    this.userService.sendEmail(this.sendAnEmailDTO).subscribe(
      res=> {
        window.console.log(res);
        this.sendAnEmailDTO = new SendAnEmailDTO();
        this.sendAnEmailDTO.sender = sessionStorage.getItem('userEmail');
      }
    );
  }
}
