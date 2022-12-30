import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit , OnDestroy {
  // Display Data
  topHeadingDisplay  : any = [];
  private Subscription : Subscription[]=[];
  constructor(
              private _dataApi :NewsApiService ) { }

  ngOnInit(): void {

  let sub = this._dataApi.topHeading().subscribe((res)=>{
      console.log(res);
      this.topHeadingDisplay = res.articles
    })
    this.Subscription.push(sub);
  }
  ngOnDestroy(): void {
      for(let sub of this.Subscription)
      {
        sub.unsubscribe;
      }
  }
}
