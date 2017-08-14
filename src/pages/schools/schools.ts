import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchoolProvider } from "../../providers/school/school";
import { SchoolModel } from "../../models/schoolModel";
import { SchoolDetailsPage } from '../school-details/school-details'

@IonicPage()
@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html',
})
export class SchoolsPage {

  items: any;
  category: any;
  limit: any;
  schools: SchoolModel[];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private schoolProvider: SchoolProvider) {
                this.getDefaults();
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolsPage');
    this.getPosts(this.category,this.limit);
  }

  getDefaults(){
    this.category="funny";
    this.limit=10;
  }

   getSchools():void{
    this.schoolProvider.getSchools().then(schools =>
    this.schools = schools);
  } 

  getPosts(category, limit){
    this.schoolProvider.getPosts(category,limit)
    .subscribe(response => {
      console.log(response);
      this.items = response.data.children;
    });
    
  }

  viewItem(item){
    this.navCtrl.push(SchoolDetailsPage, {
      item:item
    });
  }

  changeCategory(){
    this.getPosts(this.category,this.limit);
  }
}
