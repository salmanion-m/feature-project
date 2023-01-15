import {Component, OnInit, ViewChild} from '@angular/core';
import {DailyPrice, FilterDailyPrice} from "../../models";
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
export class DailyPriceComponent implements OnInit{

  filter: FilterDailyPrice = new FilterDailyPrice();
  list: DailyPrice[] = [];
  dataSource = new MatTableDataSource<DailyPrice>;
  displayedColumn: string[] = ['index', 'insCode', 'deven', 'pclosing'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(protected fb: FormBuilder,
              protected router: Router,
              protected dailyService: DailyPriceService,) {
  }

  ngOnInit(): void {

    // this._getDailyPrice();
  }


  onApplyFilter(filters: any): void {
    this.filter = FilterDailyPrice.fromJson(filters);
    this._getDailyPrice();
  }

  private _getDailyPrice(): void {
    this.dailyService.getDailyPriceList(this.filter).subscribe((result) => {
      this.list = result;
      // console.log('::::>>>>',this.list);
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
    })
  }

}
