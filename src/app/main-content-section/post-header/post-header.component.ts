import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {

  @Input() postHeader: any;

  constructor() {

  }

  ngOnInit() {
  }

}
