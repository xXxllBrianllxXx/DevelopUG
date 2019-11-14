import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { HotelService } from '../../services/hotel.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {

  dataSource;
  message = true;
  roomsHotel: any;
  roomsActives: any;
  displayedColumns: string[] = ['name', 'status'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild('name', {static: true}) nameHotel: ElementRef;
  @ViewChild('nameUpdate', {static: true}) nameUpdate: ElementRef;

  constructor(private hotelService: HotelService,
              private roomService: RoomService,
              private toastr: ToastrService,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<HotelComponent>) { }

  ngOnInit() {

    this.hotelService.getHotels().subscribe( resp => {
      if (resp.success) {
        this.setHotelsData(resp.data);
      } else {
        this.toastr.warning(resp.msg);
      }
    }, err => {
      console.log(err.error.msg);
    });
  }

  createModal(): void {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '250px',
      data: { name: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result !== null && result !== '') {
        this.createHotel(result);
      }
    });
  }

  editModal(info): void {

    this.roomService.getRooms(info).subscribe( resp => {
      if (resp.success) {
        this.roomsHotel = resp.data;

        this.roomService.getRoomsActives().subscribe( respu => {
          if (respu.success) {
            this.roomsActives = respu.data;

            const data = {
              selected: info,
              roomsHotel: this.roomsHotel,
              roomsActives: this.roomsActives
            }

            const dialogRef = this.dialog.open(EditComponent, {
              width: '500px',
              data
            });

            dialogRef.afterClosed().subscribe(result => {

              if (result !== undefined && result !== null && result !== '') {

                const dataHotel = {
                  id: info.id,
                  name: result.name
                };

                this.hotelService.updateHotel(dataHotel).subscribe( respo => {

                  if (respo.success) {

                    const dataDelete = {
                      id_hotel: info.id
                    };

                    this.hotelService.deleteHotelRooms(dataDelete).subscribe( response => {
                      if (response.success) {
                        // this.toastr.success(response.msg);
                      } else {
                        this.toastr.warning(response.msg);
                      }
                    }, err => {
                      console.log(err.error.msg);
                    });

                    for (const key in result.rooms) {
                      if (result.rooms.hasOwnProperty(key)) {

                        const element = result.rooms[key];
                        const dataRoom = {
                          id_hotel: info.id,
                          id_room: element.id
                        };

                        this.hotelService.updateHotelRooms(dataRoom).subscribe( response => {
                          if (response.success) {
                            if (this.message) {
                              this.toastr.success(response.msg);
                              this.message = false;
                            }
                          } else {
                            this.toastr.warning(response.msg);
                          }
                        }, err => {
                          console.log(err.error.msg);
                        });

                      }
                    }

                  } else {
                    this.toastr.warning(respo.msg);
                  }
                }, err => {
                  console.log(err.error.msg);
                });
              } else {
                this.ngOnInit();
              }

            });

          } else {
            this.roomsActives = respu.data;
            this.toastr.warning(respu.msg);
          }
        }, err => {
          console.log(err.error.msg);
        });

      } else {
        this.roomsHotel = resp.data;
        this.toastr.warning(resp.msg);
      }
    }, err => {
      console.log(err.error.msg);
    });

  }

  setHotelsData(data): void {
    this.dataSource = new MatTableDataSource(data);

    // tslint:disable-next-line: no-shadowed-variable
    this.dataSource.filterPredicate = (data: any, filtersJson: string) => {
        const matchFilter = [];
        const filters = JSON.parse(filtersJson);

        filters.forEach(filter => {
          const val = data[filter.id] === null ? '' : data[filter.id];
          matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
        });
        return matchFilter.every(Boolean);
    };

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createHotel(name) {

    if (name === '' || name === null || name === undefined) {
      this.toastr.warning('Ingrese el nombre');
      return;
    }

    const data = {
      name
    };

    this.hotelService.createHotel(data).subscribe( resp => {
      if (resp.success) {
        this.toastr.success(resp.msg);
        this.ngOnInit();
      } else {
        this.toastr.warning(resp.msg);
      }
    }, err => {
      console.log(err.error.msg);
    });
  }

  updateHotel() {
    console.log('ya');
  }

  changeState(event, id) {

    let newState = 1;

    if (!event) {
      newState = 0;
    }

    const updateStateHotelData = {
      state: newState,
      id
    };

    this.toastr.clear();

    this.hotelService.updateStateHotel(updateStateHotelData).subscribe( resp => {
      if (resp.success) {
        this.toastr.success(resp.msg);
        this.ngOnInit();
      } else {
        this.toastr.warning(resp.msg);
        this.ngOnInit();
      }
    }, err => {
      console.log(err.error.msg);
    });
  }

  applyFilter(filterValue: string) {
    const tableFilters = [];
    tableFilters.push({
      id: 'name',
      value: filterValue
    });
    this.dataSource.filter = JSON.stringify(tableFilters);
  }
}
