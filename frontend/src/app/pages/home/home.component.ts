import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { CreateReservComponent } from './create-reserv/create-reserv.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  selectedCity = 0;
  cero = 0;
  reserv = 0;
  city = [];
  infoHome = [];
  saveReserv = true;

  dateStart = new FormControl(new Date());
  dateEnd = new FormControl(new Date());

  @ViewChild('people', {static: true}) people: ElementRef;

  constructor( private roomService: RoomService,
              private toastr: ToastrService,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<HomeComponent> ) { }

  ngOnInit() {

    this.roomService.getCity().subscribe( resp => {
      if (resp.success) {
        this.city = resp.data;
      } else {
        this.toastr.warning(resp.msg);
      }
    }, err => {
      console.log(err.error.msg);
    });

    this.onSearchClick();

  }

  showRoom(select) {

    const ini = new Date(this.dateStart.value).toISOString().split('T')[0];
    const end = new Date(this.dateEnd.value).toISOString().split('T')[0];
    const city = this.selectedCity;
    const people = this.people.nativeElement.value;

    const info = {
      ini,
      end,
      city,
      people,
      select
    }

    if (new Date(ini) > new Date(end)) {
      this.toastr.warning('La fecha inicial no debe ser mayor a la final');
      return false;
    }

    if (people < 1) {
      this.toastr.warning('La cantidad de personas no debe ser inferior a 1');
      return false;
    }

    this.roomService.getGender().subscribe( resp => {
      if (resp.success) {

        this.roomService.getTypeDoc().subscribe( respo => {
          if (resp.success) {

            const dialogRef = this.dialog.open(CreateReservComponent, {
              width: '600px',
              data: {
                info,
                gender: resp.data,
                type_doc: respo.data
              }
            });

            dialogRef.afterClosed().subscribe(result => {
              if (result !== undefined && result !== null && result !== '') {

                this.saveReserv = true;

                for (let i = 0; i < result.doc.length; i++) {

                  const dataReserv = {
                    ini: new Date(this.dateStart.value).toISOString().split('T')[0],
                    end: new Date(this.dateEnd.value).toISOString().split('T')[0],
                    city: this.selectedCity,
                    people: this.people.nativeElement.value,
                    christ: new Date(result['christ'][i]).toISOString().split('T')[0],
                    doc: result['doc'][i],
                    gender: result['gender'][i],
                    mail: result['mail'][i],
                    name: result['name'][i],
                    phone: result['phone'][i],
                    surname: result['surname'][i],
                    type_doc: result['type_doc'][i],
                    contact_name: result['contact_name'][i],
                    contact_phone: result['contact_phone'][i],
                    id_hotel_room: select.id,
                    id_city: select.id_city
                  }

                  this.roomService.insertReservation(dataReserv).subscribe( response => {
                    if (response.success) {

                      if (this.saveReserv) {
                        this.reserv = response.data.id_reservation;
                        this.saveReserv = false;
                      }

                      const dataPerson = {
                        christ: response.data.christ,
                        city: response.data.city,
                        doc: response.data.doc,
                        end: response.data.end,
                        gender: response.data.gender,
                        id_city: response.data.id_city,
                        id_hotel_room: response.data.id_hotel_room,
                        id_reservation: this.reserv,
                        ini: response.data.ini,
                        mail: response.data.mail,
                        name: response.data.name,
                        people: response.data.people,
                        phone: response.data.phone,
                        surname: response.data.surname,
                        type_doc: response.data.type_doc
                      }

                      this.roomService.insertPerson(dataPerson).subscribe( respu => {
                        if (respu.success) {
                          this.toastr.success(respu.msg);
                        } else {
                          this.toastr.warning(respu.msg);
                        }
                      }, err => {
                        console.log(err.error.msg);
                      });

                    } else {
                      this.toastr.warning(response.msg);
                    }
                  }, err => {
                    console.log(err.error.msg);
                  });

                }
              }
            });

          } else {
            this.toastr.warning(respo.msg);
          }
        }, err => {
          console.log(err.error.msg);
        });

      } else {
        this.toastr.warning(resp.msg);
      }
    }, err => {
      console.log(err.error.msg);
    });

  }

  onSearchClick() {

    const ini = new Date(this.dateStart.value).toISOString().split('T')[0];
    const end = new Date(this.dateEnd.value).toISOString().split('T')[0];
    const city = this.selectedCity;
    const people = this.people.nativeElement.value;

    if (new Date(ini) > new Date(end)) {
      this.toastr.warning('La fecha inicial no debe ser mayor a la final');
      return false;
    }

    if (people < 1) {
      this.toastr.warning('La cantidad de personas no debe ser inferior a 1');
      return false;
    }

    const data = { ini, end, city, people };

    this.roomService.getInfoHome(data).subscribe( resp => {
      if (resp.success) {
        this.infoHome = resp.data;
      } else {
        this.toastr.warning(resp.msg);
      }
    }, err => {
      console.log(err.error.msg);
    });

  }

}
