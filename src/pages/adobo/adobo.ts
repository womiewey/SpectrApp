import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdoboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adobo',
  templateUrl: 'adobo.html',
})
export class AdoboPage {
  main=true;
  alt1= false;
  alt2=false;
  myinput;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  compute(){
    if (this.myinput <= 180){
      this.main = false;
      this.alt1 = true;
    }
  }
}
