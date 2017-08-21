import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  location: any;
  lat: number = 43.6073157;
  lng: number = 1.4230822;
  
  constructor(public navCtrl: NavController, public geoLoc: Geolocation) {

  }

  onLocateUser(){
    
 /*    this.geoLoc.getCurrentPosition()
    .then(
        (locat)=> {
          console.log('he');
        }
    )
    .catch();

  } */
    this.geoLoc.getCurrentPosition()
    .then(
      (location) => {
        console.log('Located successfully');
        this.location = location;
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;
      }
      
    )
    .catch(
      (error) => console.log('Error when locate')
    )
  }

}
