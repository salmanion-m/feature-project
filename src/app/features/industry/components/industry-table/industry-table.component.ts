import {Component, OnInit, ViewChild} from '@angular/core';
import {IndustryTable} from "../../models";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {IndustryService} from "../../services";

@Component({
  selector: 'app-industry-table',
  templateUrl: './industry-table.component.html',
  styleUrls: ['./industry-table.component.scss']
})
export class IndustryTableComponent implements OnInit {

  list: IndustryTable[] = [];
  dataSource = new MatTableDataSource<IndustryTable>;
  displayedColumn: string[] = ['index','id', 'industryName', 'industryNameEnglish', 'regDate', 'regTime'];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private router: Router,
              private industryService: IndustryService) {
  }

  ngOnInit(): void {
    this._getIndustry();
  }

  private _getIndustry(): void {
    this.industryService.getIndustry().subscribe((result) => {
      this.list = result;
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
    })
  }

}
