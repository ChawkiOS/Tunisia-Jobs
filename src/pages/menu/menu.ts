import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

	items = [
		[
			{
				title: "Concours",
				image: "http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"
			},
			{
				title: "Emploi",
				image: "http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"
			}
		],
		[
			{
				title: "Stage",
				image: "http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"
			},
			{
				title: "Entretien",
				image: "http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"
			}
		],
		[
			{
				title: "Tests",
				image: "http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"
			},
			{
				title: "Universités",
				image: "http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"
			}
		],
		[
			{
				title: "Actualités",
				image: "http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png"
			}
		]
	];

  constructor(public navCtrl: NavController) {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CategoryPage, {
      item: item
    });
  }

}
