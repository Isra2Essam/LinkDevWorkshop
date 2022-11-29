import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';
import { BannerComponent } from './banner/banner.component';
import { ThingsComponent } from './things/things.component';
import { NewsDetialComponent } from './news-detial/news-detial.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NewsComponent,
    BannerComponent,
    ThingsComponent,
    NewsDetialComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
