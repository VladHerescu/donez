import { Component, OnInit } from '@angular/core';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';
import {DonorDTO} from '../UsersDTO/DonorDTO';
import {UsersService} from '../users.service';
import {Doctor} from '../DonationDTO/Doctor';
import {AuthDoctorService} from '../auth-doctor.service';
import {DoctorDTO} from '../DonationDTO/DoctorDTO';
import {StaffDTO} from '../DonationDTO/StaffDTO';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  constructor(private authService: AuthService, private authDoctor: AuthDoctorService,public router: Router, public userService: UsersService) { }
  loginAs: string;

  private user: SocialUser;
  private loggedIn: boolean;
  doctorDTO: DoctorDTO;
  staffDTO: StaffDTO;
  failedLogin: boolean;


  ngOnInit() {
    this.loginAs = "donor";
    this.doctorDTO = new DoctorDTO();
    this.staffDTO = new StaffDTO();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res => this.sendUserInfoToServer(this.generateNormalUserDTO(res)));
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }
  loginAsDoctor(): void {
    this.userService.loginAsDoctor(this.doctorDTO).subscribe(
      () => {
        sessionStorage.setItem("loggedIn","true");
        this.failedLogin = false;
        this.router.navigate(["/homepage-doctor"]);
      },
      () => {
        this.failedLogin = true;
    })
  }

  loginAsStaff(): void {
    this.userService.loginAsStaff(this.staffDTO).subscribe(
      () => {
        sessionStorage.setItem("loggedIn","true");
        this.failedLogin = false;
        this.router.navigate(["/homepage-staff"]);
      },
      () => {
        this.failedLogin = true;
      })
  }

  isDonor(): boolean {
    if (this.loginAs === "donor")
      return true;
    else
      return false;
  }
  isDoctor(): boolean {
    if (this.loginAs === "doctor")
      return true;
    else
      return false;
  }
  isStaff(): boolean {
    if (this.loginAs === "staff")
      return true;
    else
      return false;
  }
  changeToDonor(): void {
    this.loginAs = "donor";
    this.failedLogin = false;
  }
  changeToDoctor(): void {
    this.loginAs = "doctor";
    this.failedLogin = false;
  }
  changeToStaff(): void {
    this.loginAs = "staff";
    this.failedLogin = false;
  }
  sendUserInfoToServer(donorDTO: DonorDTO): void {
    window.console.log(donorDTO);
    this.userService.sendDonorInfoToServer(donorDTO).subscribe(() => this.router.navigate(["/homepage-donor"]));
  }
  generateNormalUserDTO(user: SocialUser): DonorDTO {
    var donorDTO: DonorDTO = new DonorDTO();
    window.console.log(user);
    donorDTO.firstName = user.facebook.first_name;
    donorDTO.lastName = user.facebook.last_name;
    donorDTO.email = user.facebook.email;
    donorDTO.userId = user.facebook.id
    return donorDTO;
  }
}
