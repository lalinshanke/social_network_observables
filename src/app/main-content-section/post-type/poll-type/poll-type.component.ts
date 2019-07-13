import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll-type',
  templateUrl: './poll-type.component.html',
  styleUrls: ['./poll-type.component.css']
})
export class PollTypeComponent implements OnInit {

  @Input() postPollType: any;

  constructor() { }

  ngOnInit() {
  }

}
