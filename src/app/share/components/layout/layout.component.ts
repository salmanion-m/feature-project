import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  asideSelfDisplay: true;
  asideMenuStatic: true;
  asideCSSClasses: string;
  contentExtended: false;

  ngOnInit(): void {
  }
  showFiller = false;

}
