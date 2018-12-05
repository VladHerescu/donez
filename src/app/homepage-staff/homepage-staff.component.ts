import {Component, OnInit, ViewChild} from '@angular/core';
import {LocationForDonating} from '../DonationDTO/location';
import {Donation} from '../DonationDTO/donation';
import {UploadDonationDTO} from '../DonationDTO/uploadDonationDTO';
import {DonationsService} from '../donations.service';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-homepage-staff',
  templateUrl: './homepage-staff.component.html',
  styleUrls: ['./homepage-staff.component.scss']
})
export class HomepageStaffComponent implements OnInit {

  constructor(private donationService: DonationsService) { }
  fileLoaded: boolean;
  locations: LocationForDonating[];
  uploadDonationDTO: UploadDonationDTO;
  succesMessage1: string;
  successMessae2: string;
  errorCreateDoctor: string;
  fileLink: string = "";
  @ViewChild('frameSuccess') frameSuccess: ModalDirective;

  ngOnInit() {
    this.uploadDonationDTO = new UploadDonationDTO();
    this.getLocations();
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
}
