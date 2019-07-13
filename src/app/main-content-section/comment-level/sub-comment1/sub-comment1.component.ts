import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-comment1',
  templateUrl: './sub-comment1.component.html',
  styleUrls: ['./sub-comment1.component.css']
})
export class SubComment1Component implements OnInit {

  @Input() subComment1: any;
  constructor() { }

  ngOnInit() {
  }

}
