import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { Http, Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the RecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
  providers: [RemoteServiceProvider]
})
export class RecipePage {
  dish: any;
  ingredient= [];
  price = [];
  array = [];
  id = [];
  ingredientVar = "";
  priceVar = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public remoteService: RemoteServiceProvider, public http: Http) {
    this.dish = navParams.get('dish');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
    console.log('Dish:' + this.dish);
    this.remoteService.loadingredients().subscribe(
      data => {
        var i = 0;
        var x = data.length;
        // var test = JSON.parse(data);
        console.log("DISH: " + data[0].dish);
        console.log("Data ID:" + data[1].dish)
        while (i < x) { 
            // console.log(test[i].id)
            console.log(i);
            console.log("DISH SA LOOP: " + data[i].dish);
            console.log("ID NI DISH: " + this.dish);
            
            if (data[i].dish == this.dish){
              this.ingredientVar = data[i].ingredient;
              console.log(this.ingredientVar)
              this.ingredient.push(this.ingredientVar);
              this.priceVar = data[i].price;
              console.log(this.priceVar)
              this.price.push(this.priceVar);
            }else{
              console.log("NO");
            }
            i++;
          
        }
      },
      err => {
        console.log(err);
      },
      () => console.log('Done')
    );
  }

}
