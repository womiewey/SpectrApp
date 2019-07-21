import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



/*
  Generated class for the RemoteServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  static get parameters() {
    return [[Http]];
  }
  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }
  loadingredients() {
    var url = "http://192.168.0.88:8000/ingredients/";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  loaddishes(){
    var url = "http://192.168.0.88:8000/dish/";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}