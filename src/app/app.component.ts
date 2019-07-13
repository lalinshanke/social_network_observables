import { Component, OnInit } from '@angular/core';
import { PostFirebaseService } from './services/post-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = "";

  getData: any;

  constructor (private  postFirebaseService: PostFirebaseService) { }

  ngOnInit() {
    this.showUserListData()
  }

  showUserListData(){
    this.postFirebaseService.getuserListData().subscribe(data => {
      this.getData = data;
    })
  }

  myObservableFunction() {
    this.postFirebaseService.myObservable().subscribe((v: string) => {
      this.title = v;
    });
  }

}
