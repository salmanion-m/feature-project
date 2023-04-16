import {Component, ElementRef} from '@angular/core';
import {JsonFundService} from "../../services/json-fund.service";

@Component({
  selector: 'app-json-fund',
  templateUrl: './json-fund.component.html',
  styleUrls: ['./json-fund.component.scss']
})
export class JsonFundComponent {

  jsonData: any[] = [];


  constructor(private postsService: JsonFundService,
              private elementRef: ElementRef) {
  }


  ngOnInit(): void {
    this.callApi();
  }

  callApi() {
    this.postsService.getJsonData().subscribe(posts => {
      this.jsonData = posts;
    });
  }



}
