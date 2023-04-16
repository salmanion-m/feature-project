import {Component, ElementRef, OnInit} from '@angular/core';
import {ApiJsonService} from "../../../daily-price";

@Component({
  selector: 'app-json-letter',
  templateUrl: './json-letter.component.html',
  styleUrls: ['./json-letter.component.scss']
})
export class JsonLetterComponent implements OnInit{

  posts: any[] = [];


  constructor(private postsService: ApiJsonService,
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
