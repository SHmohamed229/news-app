import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit, OnDestroy {
  isLoading : boolean = false;
  sportsNewsDisplay : any =[];
  private Subscription : Subscription[]=[]
  constructor(
              private _dataApi : NewsApiService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
  let sub = this._dataApi.sportsNews().subscribe((res)=>{
      console.log(res);
      this.sportsNewsDisplay = res.articles;
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
