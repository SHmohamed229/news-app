import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.css']
})
export class WorldNewsComponent implements OnInit , OnDestroy{
  isLoading : boolean = false;
  worldNewsDisplay : any = [];
  private Subscription : Subscription[]=[];
  constructor(
              private _dataApi : NewsApiService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    let sub = this._dataApi.worldNews().subscribe((res)=>{
      console.log(res);
      this.worldNewsDisplay = res.articles;
      this.isLoading = false;
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
