import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DonorDTO} from './UsersDTO/DonorDTO';
import {Observable} from 'rxjs';
import {DoctorDTO} from './DonationDTO/DoctorDTO';
import {StaffDTO} from './DonationDTO/StaffDTO';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  sendDonorInfoToServer(donorDTO: DonorDTO): Observable<any> {
    let params = new URLSearchParams();
    return this.http.post("https://blood-donation-api.herokuapp.com/api/register/donor",donorDTO);
  }
  loginAsDoctor(doctorDTO: DoctorDTO): Observable<any> {
    return this.http.post("https://blood-donation-api.herokuapp.com/api/login/doctor",doctorDTO);
  }

  loginAsStaff(staffDTO: StaffDTO): Observable<any> {
    return this.http.post("https://blood-donation-api.herokuapp.com/api/login/staff",staffDTO);
  }
}
