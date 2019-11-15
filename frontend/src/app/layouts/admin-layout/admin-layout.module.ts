import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RoomComponent } from '../../pages/room/room.component';
import { ReservationComponent } from '../../pages/reservation/reservation.component';
import { LoginComponent } from '../../pages/login/login.component';
import { HotelComponent } from '../../pages/hotel/hotel.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CreateComponent as CreatHotelComponent} from '../../pages/hotel/create/create.component';
import { CreateComponent as CreateRoomComponent  } from '../../pages/room/create/create.component';
import { EditComponent as EditHotelComponent } from '../../pages/hotel/edit/edit.component';
import { EditComponent as EditRoomComponent } from '../../pages/room/edit/edit.component';
import { ViewComponent as ViewReservationComponent } from '../../pages/reservation/view/view.component';
import { HomeComponent } from '../../pages/home/home.component';
import { CreateReservComponent } from 'app/pages/home/create-reserv/create-reserv.component';
import {
  MatRippleModule,
  MatTooltipModule,
  MatTableModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule ,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatDialogModule,
  MatDialogRef,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatDividerModule,
  MatNativeDateModule,
  MAT_DIALOG_DATA
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSortModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDividerModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule ,
    MatStepperModule,
    MatSlideToggleModule,
    NgxMatSelectSearchModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  declarations: [
    DashboardComponent,
    HotelComponent,
    LoginComponent,
    HomeComponent,
    ReservationComponent,
    RoomComponent,
    CreatHotelComponent,
    CreateRoomComponent,
    EditHotelComponent,
    EditRoomComponent,
    ViewReservationComponent,
    CreateReservComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ],
  providers: [
    CreatHotelComponent,
    CreateRoomComponent,
    EditHotelComponent,
    EditRoomComponent,
    MatDatepickerModule,
    ViewReservationComponent,
    CreateReservComponent,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }
  ],
  entryComponents: [
    CreatHotelComponent,
    CreateRoomComponent,
    EditHotelComponent,
    EditRoomComponent,
    ViewReservationComponent,
    CreateReservComponent
  ],
})

export class AdminLayoutModule {}
