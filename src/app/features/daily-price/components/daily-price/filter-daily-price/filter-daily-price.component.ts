import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FilterTableComponent} from "../../../../../share";
import {FilterDailyPrice} from "../../../models";
import {FormBuilder, FormControl} from "@angular/forms";
import {DailyPriceService} from "../../../services";
import * as moment from 'jalali-moment';
import {IDatePickerConfig} from "ng2-jalali-date-picker";
import {ThemePalette} from "@angular/material/core";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-filter-daily-price',
  templateUrl: './filter-daily-price.component.html',
  styleUrls: ['filter-daily-price.component.scss'],
})
export class FilterDailyPriceComponent extends FilterTableComponent<FilterDailyPrice> implements OnInit {


  // tiles: Tile[] = [
  //   // {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   // {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  //   {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  //   {text: 'Five', cols: 1, rows: 1, color: '#DDBDF1'},
  //   {text: 'Six', cols: 1, rows: 1, color: '#DDBDF1'},
  //   {text: 'Seven', cols: 2, rows: 1, color: '#DDBDF1'}
  // ];




  // colorControl = new FormControl('warn' as ThemePalette);


  today: any;
  fromDate: any;
  toDate: any;
  persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];

  datePickerConfig: IDatePickerConfig = {
    drops: 'down',
    format: 'jYYYY/jMM/jDD',
    opens: 'left',
    showTwentyFourHours: true
  };
  transactionNumber: any;

  constructor(private fb: FormBuilder,
              private dailyService: DailyPriceService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    // this._getCurrentDate();
  }

  protected override _createForm() {
    this.form = this.fb.group({
      // insCode: new FormControl('49613772749166261'),
      insCode: new FormControl('59217041815333317'),
      FromD: new FormControl(),
      ToD: new FormControl(),
    })
  }

  override clearFilter() {
    super.clearFilter(new FilterDailyPrice())
  }

  override applyFilter() {
    let filters: FilterDailyPrice = new FilterDailyPrice();
    filters = this.form.value;
    filters.FromD = moment(this.form.controls['FromD'].value).format('jYYYY/jMM/jDD');
    filters.ToD = moment(this.form.controls['ToD'].value).format('jYYYY/jMM/jDD');
    super.applyFilter(filters);
    console.log('filters', filters)
  }


  protected _getCurrentDate() {
    let date;
    let options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    date = new Date();
    // @ts-ignore
    date = date.toLocaleString('fa-IR', options);

    date = date.replace(/[/]/g, '');
    for (var i = 0; i < 10; i++) {
      // @ts-ignore
      date = date.replace(this.persianNumbers[i], i);
    }
    date = parseInt(date);
    date = this._convertDate(date);
    this.today = moment(date, 'jYYYY,jMM,jDD');
    this.toDate = this.today;
    this.form.controls['FromD'].setValue(this.toDate)
    this.form.controls['ToD'].setValue(this.toDate);
  }

  private _convertDate(date: number | string): string {
    const _date = date?.toString().substr(0, 4) + "-" + date?.toString().substr(4, 2) + "-" + date?.toString().substr(6, 2);
    return _date
  }


}
