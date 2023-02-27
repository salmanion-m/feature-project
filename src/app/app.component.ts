import { Component } from '@angular/core';
import {SideNavToggle} from "./share";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-feature';

  isSideNaveCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data : SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNaveCollapsed = data.collapsed;

  }
}
