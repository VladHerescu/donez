import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DonationForm} from './DonationDTO/DonationForm';
import {SocialUser} from 'angularx-social-login';
import {UploadDonationDTO} from './DonationDTO/uploadDonationDTO';
import {BloodRequestDTO} from './DonationDTO/blood-requestDTO';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {
  constructor(private http: HttpClient) { }

  sendDonorFormular(donationForm: DonationForm, user: SocialUser): Observable<any> {
    window.console.log(donationForm);
    return this.http.post("https://blood-donation-api.herokuapp.com/api/donation/add/" + user.id,donationForm);
  }
  getLastDonationTime(user: SocialUser): Observable<any> {
    return this.http.get("https://blood-donation-api.herokuapp.com/api/donation/lastDonated/" + user.id);
  }
  getLastDonations(user: SocialUser): Observable<any> {
    return this.http.get("https://blood-donation-api.herokuapp.com/api/donation/all/" + user.id);
  }
  getAllDonationsForDoctor(): Observable<any> {
    return this.http.get("https://blood-donation-api.herokuapp.com/api/donation/all");
  }
  validateDonation(uploadDonationDTO: UploadDonationDTO): Observable<any> {
    const uploadData = new FormData();
    uploadData.append('file', uploadDonationDTO.filToUpload, uploadDonationDTO.filToUpload.name);
    return this.http.put("https://blood-donation-api.herokuapp.com/api/donation/addExamination?token=" + uploadDonationDTO.donationToken,uploadData);
  }
  submitBloodRequest(bloodRequest: BloodRequestDTO) {
    return this.http.post("https://blood-donation-api.herokuapp.com/api/request/add", bloodRequest);
  }
}
