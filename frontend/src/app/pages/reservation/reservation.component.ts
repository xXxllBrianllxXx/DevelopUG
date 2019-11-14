import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogRef, MatSort } from '@angular/material';
import { ReservationService } from '../../services/reservation.service';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['name_hotel', 'name_room', 'name', 'id', 'date_start', 'date_end', 'detail'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private reservationService: ReservationService,
              private toastr: ToastrService,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<ReservationComponent>) { }

  ngOnInit() {

    this.reservationService.getRservations().subscribe( resp => {
      if (resp.success) {
        this.setReservationData(resp.data);
      } else {
        this.toastr.warning(resp.msg);
      }
    }, err => {
      console.log(err.error.msg);
    });
  }

  setReservationData(data): void {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  viewModal(info): void {
    const reservationDetailData = {
      code_reservation: info.id
    };

    this.reservationService.getReservationDetail(reservationDetailData).subscribe( resp => {
      if (resp.success) {

        const dialogRef = this.dialog.open(ViewComponent, {
          data: {
            info,
            detail: resp.data
          }
        });

        dialogRef.afterClosed().subscribe(result => {
          this.ngOnInit();
        });
      } else {
        this.toastr.warning(resp.msg);
      }
    }, err => {
      console.log(err.error.msg);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
