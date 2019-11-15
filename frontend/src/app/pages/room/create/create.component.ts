import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  selected = 1;
  selectedCity = 1;

  @ViewChild('name', {static: true}) name: ElementRef;
  @ViewChild('cost', {static: true}) cost: ElementRef;
  @ViewChild('tax', {static: true}) tax: ElementRef;

  constructor(private toastr: ToastrService,
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreteClick() {

    if (this.name.nativeElement.value === '' || this.name.nativeElement.value === null || this.name.nativeElement.value === undefined ||
        this.cost.nativeElement.value === '' || this.cost.nativeElement.value === null || this.cost.nativeElement.value === undefined ||
        this.tax.nativeElement.value === '' || this.tax.nativeElement.value === null || this.tax.nativeElement.value === undefined ) {
      this.toastr.warning('Todos los campos son requeridos');
      return;
    }

    const resp = {
      name: this.name.nativeElement.value,
      cost: this.cost.nativeElement.value,
      tax: this.tax.nativeElement.value,
      location: this.selectedCity,
      state: 1,
      type: this.selected
    };

    this.dialogRef.close(resp);
  }

}
