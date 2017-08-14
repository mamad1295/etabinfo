import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  comments: FirebaseListObservable<any[]>;
  newComment = '';
  constructor(public navCtrl: NavController,public firebaseProvider: FirebaseProvider) {
    this.comments = this.firebaseProvider.getComments();
  }

  addComment() {
    this.firebaseProvider.addComment(this.newComment);
  }
 
  removeComment(id) {
    this.firebaseProvider.removeComment(id);
  }

}
