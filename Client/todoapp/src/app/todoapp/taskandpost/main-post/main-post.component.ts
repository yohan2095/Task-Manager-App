import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.css']
})
export class MainPostComponent implements OnInit {

  @Input()
  userPosts : Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
