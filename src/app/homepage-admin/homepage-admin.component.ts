import {Component, OnInit, ViewChild} from '@angular/core';
import {SendAnEmailDTO} from '../DonationDTO/sendAnEmailDTO';
import {ModalDirective} from 'angular-bootstrap-md';
import {UsersService} from '../users.service';
import {DoctorDTO} from '../DonationDTO/DoctorDTO';
import {StaffDTO} from '../DonationDTO/StaffDTO';
import {CreateDoctorDTO} from '../DonationDTO/createDoctorDTO';
import {CreateStaffDTO} from '../DonationDTO/createStaffDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage-admin',
  templateUrl: './homepage-admin.component.html',
  styleUrls: ['./homepage-admin.component.scss']
})
export class HomepageAdminComponent implements OnInit {

  sendAnEmailDTO: SendAnEmailDTO;
  failMessage: string;
  @ViewChild('frameSuccess') frameSuccess: ModalDirective;
  @ViewChild('frameFail') frameFail: ModalDirective;
  constructor(private userService: UsersService, private router: Router) { }
  doctorDTO: CreateDoctorDTO;
  staffDTO: CreateStaffDTO;

  ngOnInit() {

    this.doctorDTO = new CreateDoctorDTO();
    this.staffDTO = new CreateStaffDTO();
    this.sendAnEmailDTO = new SendAnEmailDTO();
    this.sendAnEmailDTO.sender = sessionStorage.getItem("userEmail");
    if (sessionStorage.getItem("loggedIn") !== "admin")
      this.router.navigate(["/welcome"]);
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
  createDoctor():void {
    window.console.log(this.doctorDTO);
    this.userService.createDoctor(this.doctorDTO).subscribe(
      res => {
        window.console.log(res);
        this.doctorDTO = new CreateDoctorDTO();
        this.frameSuccess.show();
      },
      err => {
        window.console.log(err);
        this.frameFail.show();
        this.failMessage = err.error.message;
      }
    )
  }
  createStaff():void {
    window.console.log(this.staffDTO);
    this.userService.createStaff(this.staffDTO).subscribe(
      res => {
        window.console.log(res);
        this.staffDTO = new CreateStaffDTO();
        this.frameSuccess.show();
      },
      err => {
        window.console.log(err);
        this.failMessage = err.error.message;
        this.frameFail.show();
      }
    )
  }
  cleanDoctor(): void {
    this.doctorDTO = new CreateDoctorDTO();
  }
  cleanStaff(): void {
    this.staffDTO = new CreateStaffDTO();
  }

}
