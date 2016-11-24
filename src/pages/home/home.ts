import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	news = [
		{
			title: "Tunisie Le Taux De Chômage S’établit À 15,5% Au Troisième Trimestre 2016",
			image: "http://i0.wp.com/concours-tunisie.tn/wp-content/uploads/2016/11/Tunisie-Le-taux-de-ch%C3%B4mage-s%C3%A9tablit-%C3%A0-155-au-troisi%C3%A8me-trimestre-2016.jpeg?fit=1360%2C680",
			pubdate: "11h ago",
			category: "News"
		},
		{
			title: "Tunisie Le Taux De Chômage S’établit À 15,5% Au Troisième Trimestre 2016",
			image: "http://i0.wp.com/concours-tunisie.tn/wp-content/uploads/2016/11/Tunisie-Le-taux-de-ch%C3%B4mage-s%C3%A9tablit-%C3%A0-155-au-troisi%C3%A8me-trimestre-2016.jpeg?fit=1360%2C680",
			pubdate: "11h ago",
			category: "News"
		},
		{
			title: "Tunisie Le Taux De Chômage S’établit À 15,5% Au Troisième Trimestre 2016",
			image: "http://i0.wp.com/concours-tunisie.tn/wp-content/uploads/2016/11/Tunisie-Le-taux-de-ch%C3%B4mage-s%C3%A9tablit-%C3%A0-155-au-troisi%C3%A8me-trimestre-2016.jpeg?fit=1360%2C680",
			pubdate: "11h ago",
			category: "News"
		},
		{
			title: "Tunisie Le Taux De Chômage S’établit À 15,5% Au Troisième Trimestre 2016",
			image: "http://i0.wp.com/concours-tunisie.tn/wp-content/uploads/2016/11/Tunisie-Le-taux-de-ch%C3%B4mage-s%C3%A9tablit-%C3%A0-155-au-troisi%C3%A8me-trimestre-2016.jpeg?fit=1360%2C680",
			pubdate: "11h ago",
			category: "News"
		},
		{
			title: "Tunisie Le Taux De Chômage S’établit À 15,5% Au Troisième Trimestre 2016",
			image: "http://i0.wp.com/concours-tunisie.tn/wp-content/uploads/2016/11/Tunisie-Le-taux-de-ch%C3%B4mage-s%C3%A9tablit-%C3%A0-155-au-troisi%C3%A8me-trimestre-2016.jpeg?fit=1360%2C680",
			pubdate: "11h ago",
			category: "News"
		}
	];

  constructor(public navCtrl: NavController) {

  }

}
