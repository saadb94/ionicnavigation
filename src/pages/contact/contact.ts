import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contacts: string[];

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contacts = [
      'Bread',
      'Milk',
      'Cheese',
      'Snacks',
      'Apples',
      'Bananas',
      'Peanut Butter',
      'Chocolate',
      'Avocada',
      'Vegemite',
      'Muffins',
      'Paper towels'
    ];
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  
  goBack(){
    this.navCtrl.pop();
  }

  gotoAbout(){
    this.navCtrl.push(AboutPage);
  }

}
