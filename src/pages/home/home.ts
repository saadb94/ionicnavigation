import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactPage} from '../contact/contact'
import {AboutPage} from '../about/about'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public gotoAbout(){
    this.navCtrl.push(AboutPage);
  }

  public gotoContact(){
    this.navCtrl.push(ContactPage);
  }

}
