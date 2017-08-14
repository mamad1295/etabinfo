import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FirebaseProvider {

  constructor(public http: Http, public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getComments() {
    return this.afd.list('/comments/');
  }
 
  addComment(name) {
    this.afd.list('/comments/').push(name);
  }
 
  removeComment(id) {
    this.afd.list('/comments/').remove(id);
  }

}
