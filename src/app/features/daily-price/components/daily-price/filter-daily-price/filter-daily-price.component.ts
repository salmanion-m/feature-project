import {Component, OnInit} from '@angular/core';
import {FilterTableComponent} from "../../../../../share";
import {FilterDailyPrice} from "../../../models";
import {FormBuilder, FormControl} from "@angular/forms";
import {DailyPriceService} from "../../../services";
import * as moment from 'jalali-moment';
import {IDatePickerConfig} from "ng2-jalali-date-picker";

@Component({
  selector: 'app-filter-daily-price',
  templateUrl: './filter-daily-price.component.html',
  styleUrls: ['./filter-daily-price.component.scss']
})
export class FilterDailyPriceComponent extends FilterTableComponent<FilterDailyPrice> implements OnInit {

  // dateObject = moment('1401-10-10','jYYYY,jMM,jDD');
  // dateObject;


  // filter: FilterDailyPrice = new FilterDailyPrice();
  today: any;
  fromDate: any;
  toDate: any;
  persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];

  // datePickerConfig:any= {
  //   opens: 'left',
  //   drop: 'up',
  //   format: 'jYYYY/jMM/jDD',
  //   disabled: true
  // };

  datePickerConfig: IDatePickerConfig = {
    drops: 'down',
    format: 'jYYYY/jMM/jDD',
    opens: 'left',
    showTwentyFourHours: true
  };

  constructor(private fb: FormBuilder,
              private dailyService: DailyPriceService) {
    super();
    // this.datePickerConfig = {
    //   drop: 'up',
    //   format: 'jYYYY/jMM/jDD',
    //   disabled: true
    // };
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this._getCurrentDate();
    // dateObject = moment('1401-10-10','jYYYY,jMM,jDD');
  }

  protected override _createForm() {
    this.form = this.fb.group({
      insCode: new FormControl('49613772749166261'),
      FromD: new FormControl(),
      ToD: new FormControl(),

      // FromDate: new FormControl(),
      // ToDate: new FormControl(),

      // FromDate:new FormControl('20091010'),
      // ToDate:new FormControl('20221010'),

      // insCode:new FormControl(49613772749166261),
      // FromDate:new FormControl(20091010),
      // ToDate:new FormControl(20221010),
      // ToDate: new FormControl(this.dateObject),


    })
  }

  override clearFilter() {
    super.clearFilter(new FilterDailyPrice())
  }

  override applyFilter() {
    // this.filter = this.form.value;

    let filters: FilterDailyPrice = new FilterDailyPrice();
    filters = this.form.value;
    // if(this.form.controls['FromDate'].value){
    //   let fromdate = moment(this.form.controls['FromDate'].value).format('jYYYYMMDD');
    //   filters.FromDate = +fromdate
    // };
    // if(this.form.controls['ToDate'].value){
    //   let todate = moment(this.form.controls['ToDate'].value).format('jYYYYMMDD');
    //   filters.ToDate = +todate
    // }


    filters.FromD = moment(this.form.controls['FromD'].value).format('jYYYY/MM/DD');
    filters.ToD = moment(this.form.controls['ToD'].value).format('jYYYY/MM/DD');
    super.applyFilter(filters);
    // super.applyFilter(this.filter);
    console.log('filters', filters)
    // console.log('this.',this.form.value)
    // console.log('fromdate',filters.FromDate)
    // console.log('todate', filters.ToDate)
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
