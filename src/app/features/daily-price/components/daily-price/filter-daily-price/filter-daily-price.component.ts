import {Component, OnInit} from '@angular/core';
import {FilterTableComponent} from "../../../../../share";
import {FilterDailyPrice} from "../../../models";
import {FormBuilder, FormControl} from "@angular/forms";
import {DailyPriceService} from "../../../services";

@Component({
  selector: 'app-filter-daily-price',
  templateUrl: './filter-daily-price.component.html',
  styleUrls: ['./filter-daily-price.component.scss']
})
export class FilterDailyPriceComponent extends FilterTableComponent<FilterDailyPrice> implements OnInit {

  filter: FilterDailyPrice = new FilterDailyPrice();

  constructor(private fb: FormBuilder,
              private dailyService: DailyPriceService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected override _createForm() {
    this.form = this.fb.group({
      insCode:new FormControl('49613772749166261'),
      FromDate:new FormControl('20091010'),
      ToDate:new FormControl('20221010'),

      // insCode:new FormControl(49613772749166261),
      // FromDate:new FormControl(20091010),
      // ToDate:new FormControl(20221010),

      // insCode: new FormControl(),
      // FromDate: new FormControl(),
      // ToDate: new FormControl(),

    })
  }

  override clearFilter() {
    super.clearFilter(new FilterDailyPrice())
  }

  override applyFilter() {
    this.filter = this.form.value;
    super.applyFilter(this.filter);
  }

}
