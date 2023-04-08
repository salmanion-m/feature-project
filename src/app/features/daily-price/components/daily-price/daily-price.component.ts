import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {Charofchart, DailyPrice, FilterDailyPrice} from "../../models";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DailyPriceService} from "../../services";
import {AppService} from "../../../../share";

@Component({
  selector: 'app-daily-price',
  templateUrl: './daily-price.component.html',
  styleUrls: ['./daily-price.component.scss'],
})
export class DailyPriceComponent implements OnInit {

  filter: FilterDailyPrice = new FilterDailyPrice();
  list: DailyPrice[] = [];
  dataSource = new MatTableDataSource<DailyPrice>;
  displayedColumn: string[] = ['index', 'insCode', 'deven', 'pclosing', 'xNivInuClMresIbs', 'shamsidate'];

  chart: boolean = false;
  pClosing: (null | number)[] = [];
  newName: string[] = [];
  xNivInuClMresIbs: (null | number)[] = [];

  item: Charofchart[] = []


  pageEvent = {pageSize: 10, pageIndex: 0}
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(protected fb: FormBuilder,
              protected router: Router,
              protected dailyService: DailyPriceService,
              private appService: AppService) {
  }


  ngOnInit(): void {
    this.appService.setTitle('قیمت روزانه');
  }


  onApplyFilter(filters: any): void {

    this.filter = FilterDailyPrice.fromJson(filters);
    this.chart = false;
    if (this.pClosing.values() && this.newName.values() && this.xNivInuClMresIbs.values()) {
      this.newName = [];
      this.pClosing = [];
      this.xNivInuClMresIbs = [];
    }
    this._getDailyPrice();
  }

  private _getDailyPrice(): void {
    this.dailyService.getDailyPriceList(this.filter).subscribe((result: DailyPrice[]) => {
      this.list = result;
      this.list.forEach((item => {
        this.pClosing.push(item.pclosing);
        this.newName.push(String(item.shamsidate));
        this.xNivInuClMresIbs.push(item.xNivInuClMresIbs);
      }));
      this.replaceZeroWithNull();
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
      this.chart = true
    })
  }


  replaceZeroWithNull(): void {
    this.pClosing = this.pClosing.map(value => value === 0 ? null : value);
    this.xNivInuClMresIbs = this.xNivInuClMresIbs.map(value => value === 0 ? null : value);
  }


}
