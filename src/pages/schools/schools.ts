import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchoolProvider } from "../../providers/school/school";


@IonicPage()
@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html',
})
export class SchoolsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolsPage');
  }

}
