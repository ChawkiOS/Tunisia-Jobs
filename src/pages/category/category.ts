import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
	selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  		this.selectedItem = navParams.get('item');
  		
  }

}
