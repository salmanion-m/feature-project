import {Component, OnInit, ViewChild} from '@angular/core';
import {InstrumentTable} from "../../models";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {InstrumentService} from "../../services";

@Component({
  selector: 'app-instrument-table',
  templateUrl: './instrument-table.component.html',
  styleUrls: ['./instrument-table.component.scss']
})
export class InstrumentTableComponent implements OnInit {

  list: InstrumentTable[] = [];
  dataSource = new MatTableDataSource<InstrumentTable>;
  displayedColumn: string[] = ['index','instrumentId'];

  pageEvent={pageSize:10,pageIndex:0}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
              private intService: InstrumentService) {
  }

  ngOnInit() {
    this._getInstList();
  }

  private _getInstList(): void{
    this.intService.getInstrument().subscribe((result)=>{
      this.list = result;
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
    })
  }

}
