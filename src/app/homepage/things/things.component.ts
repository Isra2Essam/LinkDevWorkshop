import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/core/services/homepage.service';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.scss']
})
export class ThingsComponent implements OnInit{
  thingsWeDoList: any;
  title: any;
  brief: any;

  constructor(private homePageService: HomepageService){

  }
  ngOnInit(): void {
    this.homePageService.getThingsWeDO().subscribe((data:any) =>{
      console.log(data);
      this.thingsWeDoList = data[0]["items"];
      this.title = data[0]["title"];
      this.brief = data[0]["brief"];
    })
  }


}
