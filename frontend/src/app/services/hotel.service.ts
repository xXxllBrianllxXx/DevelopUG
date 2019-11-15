import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HotelService {

  constructor( private http: HttpClient ) { }

  getHotels() {
    return this.http.get<any>(environment.apiUrl + 'hotel');
  }

  createHotel(data) {
    return this.http.post<any>(environment.apiUrl + 'create-hotel', data);
  }

  updateStateHotel(data) {
    return this.http.post<any>(environment.apiUrl + 'update-state-hotel', data);
  }

  updateHotel(data) {
    return this.http.post<any>(environment.apiUrl + 'update-name-hotel', data);
  }

  updateHotelRooms(data) {
    return this.http.post<any>(environment.apiUrl + 'update-hotel-rooms', data);
  }

  deleteHotelRooms(data) {
    return this.http.post<any>(environment.apiUrl + 'delete-hotel-rooms', data);
  }
}
