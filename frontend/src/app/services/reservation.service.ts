import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor( private http: HttpClient ) { }

  getRservations() {
    return this.http.get<any>(environment.apiUrl + 'reservations');
  }

  getReservationDetail(data) {
    return this.http.post<any>(environment.apiUrl + 'reservations-detail', data);
  }
}
