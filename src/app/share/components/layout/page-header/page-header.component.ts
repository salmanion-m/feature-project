import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../../../services";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() icon? : string;

  title: String;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getTitle().subscribe(appTitle => this.title = appTitle)
  }


  // title: String;

  // constructor(private appService: AppService) { }

  // ngOnInit() {
  //   this.appService.getTitle().subscribe(appTitle => this.title = appTitle);
  // }

}
