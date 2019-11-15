import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-reserv',
  templateUrl: './create-reserv.component.html',
  styleUrls: ['./create-reserv.component.scss']
})

export class CreateReservComponent implements OnInit {

  cantPeople = [];
  formData = {
    name: [],
    surname: [],
    christ: [],
    gender: [],
    type_doc: [],
    doc: [],
    mail: [],
    phone: [],
    contact_name: [],
    contact_phone: []
  };
  dateChrist = new FormControl(new Date());

  selectedGenre = 1;
  selectedDoc = 1;

  constructor( private toastr: ToastrService,
    public dialogRef: MatDialogRef<CreateReservComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.cantPeople = Array(parseInt(this.data.info.people));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreteClick() {

    if (this.formData.name.length < this.data.info.people ||
        this.formData.surname.length < this.data.info.people ||
        this.formData.christ.length < this.data.info.people ||
        this.formData.gender.length < this.data.info.people ||
        this.formData.type_doc.length < this.data.info.people ||
        this.formData.doc.length < this.data.info.people ||
        this.formData.mail.length < this.data.info.people ||
        this.formData.contact_phone.length < this.data.info.people ||
        this.formData.contact_name.length < this.data.info.people ||
        this.formData.phone.length < this.data.info.people) {

      this.toastr.warning('Debe diligenciar todos los campos de las personas');
      return false;
    }

    this.dialogRef.close(this.formData);
  }

}
