import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipePage } from '../recipe/recipe';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AdoboPage } from '../adobo/adobo';
import { SinigangPage } from '../sinigang/sinigang';
import { SpaghettiPage } from '../spaghetti/spaghetti';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RemoteServiceProvider]

})
export class HomePage {
  postList = [];
  array= [];
  dish="";
  constructor(public navCtrl: NavController, public remoteService: RemoteServiceProvider, public http: Http, ) {

  }
  ionViewDidLoad() {
    console.log("I'm alive!");
    this.remoteService.loaddishes().subscribe(
      data => {
        var i = 0;
        var x = data.length;
        while (i < x) {
          this.postList = data[i];
          console.log(this.postList)
          this.array.push(this.postList);
          console.log(this.array[i]);
          i++;
        }

      },
      err => {
        console.log(err);
      },
      () => console.log('Done')
    );
  }
  // recipe(dish) {
  //   console.log(dish);
  //   console.log("I went here!");
  //   this.navCtrl.push(RecipePage,{dish: dish});
  // }
  adobo(){
    this.navCtrl.push(AdoboPage);
  }
  sinigang(){
    this.navCtrl.push(SinigangPage);
  }
  spaghetti(){
    this.navCtrl.push(SpaghettiPage);
  }
}
