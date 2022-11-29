import { Component } from '@angular/core';
import { Banner } from 'src/core/models/banner-vm';
import { HomepageService } from 'src/core/services/homepage.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  items = [1,1,1,1,1,1,1];

  banners = new Array<Banner>();
  selectedBanner!: Banner;
  currentIndex = 1;
  ready = false;

  constructor(private homePageService: HomepageService) {}

  ngOnInit(): void {
    this.getBanners();
  }

  getBanners(): void {
    this.homePageService.getBanners().subscribe((banners: Array<Banner>) => {
      this.banners = banners;
      this.selectedBanner = this.banners[0];
      console.log(banners);

      this.ready = true;
    });
  }

  switchBanner(i: number): void {
    this.selectedBanner = this.banners[i];
    this.currentIndex = i + 1;
  }
}
