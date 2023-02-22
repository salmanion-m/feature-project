import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Menu, MenuItem} from "../../../models";

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSidebarComponent {

  @Input() menu: Menu = [];

  open: boolean = false

  panelOpenState: boolean = false;

  closePanel() {
    this.panelOpenState = true;
  }




}
