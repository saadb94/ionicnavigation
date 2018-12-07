import { Geolocation } from '@ionic-native/geolocation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PlaceLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-location',
  templateUrl: 'place-location.html',
})
export class PlaceLocationPage {
 
  currentLongitude: any;
  currentLatitude: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation){
    
  } 
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceLocationPage');
  }

  confirmLocation(){
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.currentLongitude = resp.coords.longitude;
      this.currentLatitude = resp.coords.latitude;
    }).catch((error)=>{
      console.log('Error getting location: ', error)
    })
    
    console.log('Latitude',this.currentLatitude);
    console.log('Longitude', this.currentLongitude);


  }

}


