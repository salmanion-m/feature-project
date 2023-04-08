import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {LetterTypeTable} from "../../models";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {LetterTypeService} from "../../services";
import {AppService} from "../../../../share";

@Component({
  selector: 'app-letter-type-table',
  templateUrl: './letter-type-table.component.html',
  styleUrls: ['./letter-type-table.component.scss']
})
export class LetterTypeTableComponent implements OnInit{

  list: LetterTypeTable[] = [];
  dataSource = new MatTableDataSource<LetterTypeTable>;
  displayedColumn: string[] = ['index','letterTypeId','name','publisherTypeId','letterGroupId'];

  pageEvent={pageSize:10,pageIndex:0}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  title: String;

  constructor(private router: Router,
              private LetterService: LetterTypeService,
              private appService: AppService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.appService.setTitle('نوع نامه');
    this.appService.getTitle().subscribe(appTitle => {
      this.title = appTitle;
      this.cdr.detectChanges(); // call detectChanges() after updating title
    });
    this._getLetterTypeList();
  }

  private _getLetterTypeList(): void {
    this.LetterService.getLetterType().subscribe((result) => {
      this.list = result;
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
    })
  }

}
