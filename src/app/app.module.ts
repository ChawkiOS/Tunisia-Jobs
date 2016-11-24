import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { CategoryPage } from '../pages/category/category';
import { PostPage } from '../pages/post/post';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MenuPage,
    HomePage,
    CategoryPage,
    PostPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MenuPage,
    HomePage,
    CategoryPage,
    PostPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
