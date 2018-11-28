import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DonationForm} from './DonationDTO/DonationForm';
import {SocialUser} from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  constructor(private http: HttpClient) { }

  sendDonorFormular(donationForm: DonationForm, user: SocialUser): Observable<object> {
    return this.http.post("url" + user.id,donationForm);
  }
}
