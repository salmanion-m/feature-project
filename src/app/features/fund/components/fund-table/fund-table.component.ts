import {Component, OnInit, ViewChild} from '@angular/core';
import {Fund} from "../../models";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {FundService} from "../../services";
import {AppService} from "../../../../share";

@Component({
  selector: 'app-fund-table',
  templateUrl: './fund-table.component.html',
  styleUrls: ['./fund-table.component.scss']
})
export class FundTableComponent implements OnInit {

  fund: Fund[] = [];
  dataSource = new MatTableDataSource<Fund>;
  displayedColumn: string[] = ['index', 'id', 'cfundId', 'instituteTypeId', 'instituteType', 'instituteKind', 'seoregisterNo', 'ceo'];

  pageEvent={pageSize:10,pageIndex:0}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
              private fundService: FundService,
              private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.setTitle('صندوق');
    this._getFund();
  }

  _getFund(): void {
    this.fundService.getFundList().subscribe((result) => {
      this.fund = result;
      this.dataSource = new MatTableDataSource(this.fund);
      this.dataSource.paginator = this.paginator;
    })
  }

}
