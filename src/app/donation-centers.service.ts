import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocationForDonating} from './DonationDTO/location';

@Injectable({
  providedIn: 'root'
})
export class DonationCentersService {

  constructor(private http: HttpClient) { }
  getDonationCenters(): Observable<LocationForDonating[]> {
    // @ts-ignore
    return this.http.get("https://blood-donation-api.herokuapp.com/api/centres/find");
  }
}
