import { Component, OnInit } from '@angular/core';
import {AuthService, SocialUser} from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,  private http: HttpClient, public router: Router) { }

  private user: SocialUser;
  private loggedIn: boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  navigateToHomePage():void {
    this.router.navigate(["/welcome"]);
    location.reload();
  }
  signOut(): void {
    if (this.user.provider === "FACEBOOK") {
      window.console.log("Logging out");
      this.http.delete("https://graph.facebook.com/" + this.user.id + "/permissions?access_token=" + this.user.authToken)
        .subscribe(() => this.navigateToHomePage());
    }
  }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
