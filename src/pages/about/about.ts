import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactPage} from '../contact/contact'
import { HomePage } from '../home/home';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goBack(){
    if(this.navCtrl.getPrevious().name=="ContactPage"){
      this.navCtrl.popTo(HomePage);
      
    }
    console.log(this.navCtrl.getPrevious().name)
    this.navCtrl.pop();
  }

  gotoContact(){
    this.navCtrl.push(ContactPage);
  }

}
