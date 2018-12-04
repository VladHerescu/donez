import { Injectable } from '@angular/core';
import {Doctor} from './DonationDTO/Doctor';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthDoctorService {

  private doctor: Doctor;

  constructor(private http: HttpClient) { }

  authState(): Doctor{
    return this.doctor;
  }
  signIn(): any {
    return this.http.post("loginAsDoctorUrl",this.doctor);
  }
  signOut(): void {
    this.doctor = null;
  }
}
