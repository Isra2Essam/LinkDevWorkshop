import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomepageService } from 'src/core/services/homepage.service';

@Component({
  selector: 'app-news-detial',
  templateUrl: './news-detial.component.html',
  styleUrls: ['./news-detial.component.scss'],
})
export class NewsDetialComponent implements OnInit {
  newsItemId: number = 0;
  newsItem: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private homePageService: HomepageService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.newsItemId = params['id'] - 1;
    });
  }

  ngOnInit(): void {
    this.homePageService.getNewsItem(this.newsItemId).subscribe((data) => {
      this.newsItem = data;
    });
  }
}
