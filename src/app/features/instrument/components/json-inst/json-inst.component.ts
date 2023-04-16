import {Component, ElementRef, OnInit} from '@angular/core';
import {JsonInstService} from "../../services/json-inst.service";

@Component({
  selector: 'app-json-inst',
  templateUrl: './json-inst.component.html',
  styleUrls: ['./json-inst.component.scss']
})
export class JsonInstComponent implements OnInit{

  posts: any[] = [];


  constructor(private postsService: JsonInstService,
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
