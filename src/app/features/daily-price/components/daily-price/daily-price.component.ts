import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Charofchart, DailyPrice, FilterDailyPrice} from "../../models";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {DailyPriceService} from "../../services";

@Component({
  selector: 'app-daily-price',
  templateUrl: './daily-price.component.html',
  styleUrls: ['./daily-price.component.scss']
})
export class DailyPriceComponent implements OnInit {

  filter: FilterDailyPrice = new FilterDailyPrice();
  list: DailyPrice[] = [];
  dataSource = new MatTableDataSource<DailyPrice>;
  displayedColumn: string[] = ['index', 'insCode', 'deven', 'pclosing', 'shamsidate'];

  chart: boolean = false;
  newData: number[] = [];
  newName: string[] = [];

  item: Charofchart[] =[]


  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(protected fb: FormBuilder,
              protected router: Router,
              protected dailyService: DailyPriceService,) {
  }

  ngOnInit(): void {

  }


  onApplyFilter(filters: any): void {
    this.filter = FilterDailyPrice.fromJson(filters);
    this._getDailyPrice();
  }

  private _getDailyPrice(): void {
    this.dailyService.getDailyPriceList(this.filter).subscribe((result: DailyPrice[]) => {
      this.list = result;
      console.log('::::>>>>', this.list);
      this.list.forEach((item => {
        this.newData.push(item.pdrCotVal);
        this.newName.push(String(item.shamsidate));
      }));
      // console.log('newData', this.newData)
      // console.log('newName', this.newName)
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
    })
  }

  showCharts() {
    if (this.chart === false) {
      this.chart = true;
    } else {
      this.chart = false
    }
  }


}
