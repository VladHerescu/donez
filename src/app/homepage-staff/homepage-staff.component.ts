import {Component, OnInit, ViewChild} from '@angular/core';
import {LocationForDonating} from '../DonationDTO/location';
import {Donation} from '../DonationDTO/donation';
import {UploadDonationDTO} from '../DonationDTO/uploadDonationDTO';
import {DonationsService} from '../donations.service';
import {ModalDirective} from 'angular-bootstrap-md';
import {SendAnEmailDTO} from '../DonationDTO/sendAnEmailDTO';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage-staff',
  templateUrl: './homepage-staff.component.html',
  styleUrls: ['./homepage-staff.component.scss']
})
export class HomepageStaffComponent implements OnInit {

  constructor(private donationService: DonationsService,  public router: Router,private userService: UsersService) { }
  fileLoaded: boolean;
  locations: LocationForDonating[];
  uploadDonationDTO: UploadDonationDTO;
  sendAnEmailDTO: SendAnEmailDTO;
  succesMessage1: string;
  successMessae2: string;
  errorCreateDoctor: string;
  fileLink: string = "";
  @ViewChild('frameSuccess') frameSuccess: ModalDirective;

  ngOnInit() {
    this.uploadDonationDTO = new UploadDonationDTO();
    this.getLocations();
    this.sendAnEmailDTO = new SendAnEmailDTO();
    this.sendAnEmailDTO.sender = sessionStorage.getItem("userEmail");
    if (sessionStorage.getItem("loggedIn") !== "staff" && sessionStorage.getItem("loggedIn") !== "admin")
      this.router.navigate(["/welcome"]);
  }
  getLocations(): void {

  }
  onFileChanged(event) {
    this.fileLoaded = true;
    var file = event.target.files[0];
    this.uploadDonationDTO.filToUpload = file;
    window.console.log(file);
  }
  uploadDonation(): void {
    window.console.log(this.uploadDonationDTO);
    this.donationService.validateDonation(this.uploadDonationDTO).subscribe(
      res => {
        window.console.log(res);
        this.uploadDonationDTO = new UploadDonationDTO();
        this.fileLink = res.url;
        this.frameSuccess.show();
      },
      err => {
        window.console.log(err);
      }
    )
  }
  sendEmail(): void {
    window.console.log(this.sendAnEmailDTO);
    this.userService.sendEmail(this.sendAnEmailDTO).subscribe(
      res=> {
        window.console.log(res);
        this.sendAnEmailDTO = new SendAnEmailDTO();
        this.sendAnEmailDTO.sender = sessionStorage.getItem("userEmail");
      }
    )
  }
}
