import {Component, ElementRef, OnInit} from '@angular/core';
import {JsonIndustryService} from "../../services";

@Component({
  selector: 'app-json-industry',
  templateUrl: './json-industry.component.html',
  styleUrls: ['./json-industry.component.scss']
})
export class JsonIndustryComponent implements OnInit{

  posts: any[] = [];


  constructor(private postsService: JsonIndustryService,
              private elementRef: ElementRef) {
  }


  ngOnInit(): void {
    this.callApi();
  }

  callApi() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }


}
