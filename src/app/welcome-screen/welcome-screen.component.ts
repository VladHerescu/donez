import { Component, OnInit } from '@angular/core';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }
  loginAs: string;

  private user: SocialUser;
  private loggedIn: boolean;

  ngOnInit() {
    this.loginAs = "donor";
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(() => this.router.navigate(["/homepage-donor"]));
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
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
  }
  changeToDoctor(): void {
    this.loginAs = "doctor";
  }
  changeToStaff(): void {
    this.loginAs = "staff";
  }
}
