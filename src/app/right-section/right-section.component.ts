import { Component, OnInit, Input } from '@angular/core';
import { PostFirebaseService } from './../services/post-firebase.service';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})


export class RightSectionComponent implements OnInit {

 test = 1;
 addTest: string;
 twoWay:any;
 shanky: any;



  constructor( private  postFirebaseService: PostFirebaseService ) { }

  ngOnInit() {
  }

myCommonObservable() {
  this.postFirebaseService.commonObservable.next("This is from child 2");
}

}
