import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {

  left = 'this is the left component';
  constructor() { }

  ngOnInit() {
  }

}
