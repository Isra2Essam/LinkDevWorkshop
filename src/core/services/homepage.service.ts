import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiConstant } from '../constants/api-constants';
import { Banner } from '../models/banner-vm';
import { News } from '../models/news-vm';
import { ThingsWeDo } from '../models/things-we-do-vm';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }

  getNewsList(){
    return this.http.get(ApiConstant.Url + "d275425a434e02acf2f7");
  }
  getNewsItem(id: number){
    return this.http.get(ApiConstant.Url + "d275425a434e02acf2f7/News/" + id);
  }
  getCategories(){
    return this.http.get(ApiConstant.Url + "91298d970c27e9a06518")
  }
  getThingsWeDO(){
    return this.http.get<ThingsWeDo>('../../assets/json/things-we-do.json')
  }
  getBanners(): Observable<Array<Banner>> {
    return this.http
      .get<Array<Banner>>(ApiConstant.Url + "fee177346e7875554413")
      .pipe(map((result: any) => result.slides));
  }
}
