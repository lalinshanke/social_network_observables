import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-type',
  templateUrl: './post-type.component.html',
  styleUrls: ['./post-type.component.css']
})
export class PostTypeComponent implements OnInit {

  @Input() postType: any;


  constructor() { }

  ngOnInit() {

  }

}
