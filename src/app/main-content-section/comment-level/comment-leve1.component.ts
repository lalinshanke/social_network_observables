import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-leve1',
  templateUrl: './comment-leve1.component.html',
  styleUrls: ['./comment-leve1.component.css']
})
export class CommentLeve1Component implements OnInit {

  commentTypeBar = false;

  @Input() postComment: any;

  constructor() { }

  ngOnInit() {
  }
  showCommentTypeBar(){
    this.commentTypeBar = true;
  }

}
