import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-mat-alert',
  templateUrl: './mat-alert.component.html',
  styleUrls: ['./mat-alert.component.scss']
})
export class MatAlertComponent {

  message = '';

  constructor(public dialogReff: MatDialogRef<MatAlertComponent>,
    private dialogRef: MatDialogRef<MatAlertComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string }
  ) {
    this.message = data ? data.message : '';
  }

}
