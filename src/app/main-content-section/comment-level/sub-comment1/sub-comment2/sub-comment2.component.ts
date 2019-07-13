import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-comment2',
  templateUrl: './sub-comment2.component.html',
  styleUrls: ['./sub-comment2.component.css']
})
export class SubComment2Component implements OnInit {

  @Input() subComment2: any;

  constructor() { }

  ngOnInit() {
  }

}
