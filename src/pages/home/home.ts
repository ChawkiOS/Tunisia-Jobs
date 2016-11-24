import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PostPage } from '../post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	news: Array<{title: string, image: string, pubdate: string, category: string, content: string}>;

  constructor(public navCtrl: NavController) {
  	this.news = [];
  	for (let i = 1; i < 11; i++) {
      this.news.push({
        title: 'Tunisie Le Taux De Chômage S’établit À 15,5% Au Troisième Trimestre 2016',
        image: 'http://i0.wp.com/concours-tunisie.tn/wp-content/uploads/2016/11/Tunisie-Le-taux-de-ch%C3%B4mage-s%C3%A9tablit-%C3%A0-155-au-troisi%C3%A8me-trimestre-2016.jpeg?fit=1360%2C680',
        pubdate: "11h ago",
        category: "News",
        content: "Taux de chomage : D’après les résultats de l’Enquête Nationale sur la Population et l’Emploi du troisième trimestre 2016, le nombre de chômeurs en Tunisie s’établit à 630 mille du total de la population active. Par conséquent, le taux de chômage s’établit à 15,5%, a annoncé l’Institut national de la statistique (INS). Le taux de chômage pour le troisième trimestre 2016 est estimé à 12,5% chez les hommes et 23,2% chez les femmes. Au troisième trimestre 2016, le nombre des occupés s’établit à 3,425 millions et se répartit en 2,529 millions hommes et 896.300 femmes. Par rapport au deuxième trimestre 2016, le nombre des occupés est de 3,417 millions enregistrant une augmentation de 8.300 occupés."
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PostPage, {
      item: item
    });
  }

}
