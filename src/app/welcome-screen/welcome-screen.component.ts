import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  constructor() { }
  loginAs: string;

  ngOnInit() {
    this.loginAs = "donor";
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
