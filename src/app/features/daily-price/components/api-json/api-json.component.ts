import {AfterViewInit, Component, ElementRef, OnChanges, OnInit} from '@angular/core';
import {ApiJsonService} from "../../services";
import {map} from "rxjs";

@Component({
  selector: 'app-api-json',
  templateUrl: './api-json.component.html',
  styleUrls: ['./api-json.component.scss']
})
export class ApiJsonComponent implements OnInit {

  posts: any[] = [];
  jsonData: any[] = [];


  constructor(private postsService: ApiJsonService,
              private elementRef: ElementRef) {
  }


  ngOnInit(): void {
    this.callApi();
    this.callURL();
  }

  callApi() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  callURL() {
    this.postsService.getJsonData().subscribe(posts => {
      this.jsonData = posts;
    });
  }

}
