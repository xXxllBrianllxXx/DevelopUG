import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogRef } from '@angular/material';
import { RoomService } from '../../services/room.service';
import { HotelService } from '../../services/hotel.service';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})

export class RoomComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['name', 'location', 'type', 'cost', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private hotelService: HotelService,
              private roomService: RoomService,
              private toastr: ToastrService,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<RoomComponent>) { }

  ngOnInit() {

    this.roomService.getRoom().subscribe( resp => {
      if (resp.success) {
        this.setRoomData(resp.data);
      } else {
        this.toastr.warning(resp.msg);
      }
    }, err => {
      console.log(err.error.msg);
    });
  }

  setRoomData(data): void {

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
  }

  editModal(info): void {

    this.roomService.getTypes().subscribe( resp => {
      if (resp.success) {

        this.roomService.getCity().subscribe( respo => {
          if (respo.success) {

            const dialogRef = this.dialog.open(EditComponent, {
              width: '250px',
              data: {
                info,
                types: resp.data,
                city: respo.data
              }
            });

            dialogRef.afterClosed().subscribe(result => {

              if (result !== undefined && result !== null && result !== '') {

                this.roomService.updateRoom(result).subscribe( respon => {
                  if (respon.success) {
                    this.toastr.success(respon.msg);
                    this.ngOnInit();
                  } else {
                    this.toastr.warning(respon.msg);
                  }
                }, err => {
                  console.log(err.error.msg);
                });
              } else {
                this.ngOnInit();
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

  createModal(): void {

    this.roomService.getTypes().subscribe( resp => {
      if (resp.success) {

        this.roomService.getCity().subscribe( respo => {
          if (respo.success) {

            const dialogRef = this.dialog.open(CreateComponent, {
              width: '250px',
              data: {
                info: resp.data,
                city: respo.data
              }
            });

            dialogRef.afterClosed().subscribe(result => {

              if (result !== undefined && result !== null && result !== '') {

                this.roomService.createRoom(result).subscribe( respon => {
                  if (respon.success) {
                    this.toastr.success(respon.msg);
                    this.ngOnInit();
                  } else {
                    this.toastr.warning(respon.msg);
                  }
                }, err => {
                  console.log(err.error.msg);
                });
              } else {
                this.ngOnInit();
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

    this.roomService.updateStateRoom(updateStateHotelData).subscribe( resp => {
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
