import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  selected = 1;
  selectedCity = 1;

  constructor(private toastr: ToastrService,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.selected = this.data.info.id_type;
    this.selectedCity = this.data.info.location;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditClick() {

    if (this.data.info.name === '' || this.data.info.name === null || this.data.info.name === undefined ||
        this.data.info.cost_room === '' || this.data.info.cost_room === null || this.data.info.cost_room === undefined ||
        this.data.info.tax === '' || this.data.info.tax === null || this.data.info.tax === undefined ) {
      this.toastr.warning('Todos los campos son requeridos');
      return;
    }

    const resp = {
      id: this.data.info.id,
      name: this.data.info.name,
      cost: this.data.info.cost_room,
      tax: this.data.info.tax,
      location: this.selectedCity,
      type: this.selected
    };

    this.dialogRef.close(resp);
  }

}
