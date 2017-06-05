import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestapiProvider {

  apiURL = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=b7ef8ea7d00c4f5d9936130aeef8fcfd"
  url =    "https://newsapi.org/v1/articles?source=";
  //source = "";
  key = "&apiKey=b7ef8ea7d00c4f5d9936130aeef8fcfd";
  url2 = "http://jsonplaceholder.typicode.com/users";
  data;

  constructor(public http: Http) {
    console.log('Hello RestapiProvider Provider');
  }

  getNews(source){
    return new Promise(resolve => {
      //this.http.get(this.url2)
      this.http.get(this.url+source+this.key)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.articles;
        resolve(this.data)
      })
    })
  }
}
