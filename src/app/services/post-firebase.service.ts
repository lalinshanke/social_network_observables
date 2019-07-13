import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostFirebaseService {

  commonObservable = new Subject();

  constructor( private http: HttpClient ) { }

  getuserListData(){
    return this.http.get('https://my-angular-chat-app-api.firebaseio.com/userInfo.json').pipe(
      map((response:Response) => {
        return response;
      })
    );
  }

  myObservable() {
    return new Observable(observer => {
      setTimeout(() => observer.next("hello Root, from Observable!"), 2000);
    });
  }

}
