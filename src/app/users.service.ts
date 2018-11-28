import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DonorDTO} from './UsersDTO/DonorDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  sendDonorInfoToServer(donorDTO: DonorDTO): Observable<any> {
    let params = new URLSearchParams();
    return this.http.post("https://blood-donation-api.herokuapp.com/api/register/donor",donorDTO);
  }
}
