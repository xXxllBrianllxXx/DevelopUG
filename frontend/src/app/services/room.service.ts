import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  constructor( private http: HttpClient ) { }

  getRooms(data) {
    return this.http.post<any>(environment.apiUrl + 'room', data);
  }

  getRoomsActives() {
    return this.http.get<any>(environment.apiUrl + 'room-actives');
  }

  getRoom() {
    return this.http.get<any>(environment.apiUrl + 'room-all');
  }

  updateStateRoom(data) {
    return this.http.post<any>(environment.apiUrl + 'update-state-room', data);
  }

  getTypes() {
    return this.http.get<any>(environment.apiUrl + 'types');
  }

  createRoom(data) {
    return this.http.post<any>(environment.apiUrl + 'create-room', data);
  }

  updateRoom(data) {
    return this.http.post<any>(environment.apiUrl + 'update-room', data);
  }
}
