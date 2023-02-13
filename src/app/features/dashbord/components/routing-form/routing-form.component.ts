import {Component, OnInit} from '@angular/core';
import {AppService} from "../../../../share";

@Component({
  selector: 'app-routing-form',
  templateUrl: './routing-form.component.html',
  styleUrls: ['./routing-form.component.scss']
})
export class RoutingFormComponent implements OnInit {

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.setTitle('Dashboard')
  }

}
