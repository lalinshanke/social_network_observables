import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-likes',
  templateUrl: './post-likes.component.html',
  styleUrls: ['./post-likes.component.css']
})
export class PostLikesComponent implements OnInit {
  changeColor: any;

  @Input() likesCountList: any;

  constructor() {}

  ngOnInit() {
    this.changeColor = this.likesCountList.postLikeCount;
  }
  changeColorCount(changeColor) {
    if (changeColor <= 10) {
      return 'gray';
    } else if (changeColor > 10 && changeColor <= 20) {
      return 'blue';
    } else if (changeColor > 20) {
      return 'red';
    }
  }
}
