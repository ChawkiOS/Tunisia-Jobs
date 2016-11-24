import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
	item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  		this.item = navParams.get('item');
  		
  }

}
