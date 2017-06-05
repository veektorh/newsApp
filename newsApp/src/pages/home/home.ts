import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestapiProvider } from '../../providers/restapi/restapi';
import {Platform} from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  source ;
  news ;
  page;
  constructor(public navCtrl: NavController, public navParams: NavParams , public restapi : RestapiProvider, public platform : Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getNewsFromAPi("cnn");
  }

  getNewsFromAPi(newssource){
    this.restapi.getNews(newssource)
    .then( data =>{
      this.news = data
      console.log(this.source)
    })
  }

  exitApp(){
    this.platform.exitApp();
  }

}
