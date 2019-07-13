import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-type',
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.css']
})
export class ContentTypeComponent implements OnInit {

  @Input() postContentType: any;

  constructor() { }

  ngOnInit() {
  }

}
