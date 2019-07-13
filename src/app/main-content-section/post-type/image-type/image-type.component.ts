import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-type',
  templateUrl: './image-type.component.html',
  styleUrls: ['./image-type.component.css']
})
export class ImageTypeComponent implements OnInit {

  likeData: any;

  @Input() postImgType: any;

  constructor() { }

  ngOnInit() {

  }

}
