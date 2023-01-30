import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Menu} from "../../../models";

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSidebarComponent {

  @Input() menu: Menu = [];

}
