import { Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { HotelComponent } from '../../pages/hotel/hotel.component';
import { RoomComponent } from '../../pages/room/room.component';
import { ReservationComponent } from '../../pages/reservation/reservation.component';
import { HomeComponent } from '../../pages/home/home.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'hotel', component: HotelComponent },
    { path: 'room', component: RoomComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
