import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../../../services";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() icon? : string;
  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;

  title: String;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getTitle().subscribe(appTitle => this.title = appTitle)
  }

  // getHeaderClass(): string {
  //   let styleClass = '';
  //   if (this.collapsed && this.screenWidth > 768) {
  //     styleClass = 'head-trimmed';
  //   } else {
  //     styleClass = 'head-md-screen';
  //   }
  //   return styleClass
  // }

  // title: String;

  // constructor(private appService: AppService) { }

  // ngOnInit() {
  //   this.appService.getTitle().subscribe(appTitle => this.title = appTitle);
  // }


  getHeaderTitleClass(): string {
    let styleClass= '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'headerTitle-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'headerTitle-md-screen'
    }
    return styleClass;
  }

}
