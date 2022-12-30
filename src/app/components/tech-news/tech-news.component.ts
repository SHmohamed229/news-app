import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit , OnDestroy {
  isLoading : boolean = false;
  tecNewsDisplay :any = [];
  private Subscription : Subscription[]=[];
  constructor(
              private _dataApi : NewsApiService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
  let sub = this._dataApi.tecNews().subscribe((res)=>{
      console.log(res);
      this.tecNewsDisplay = res.articles;
    this.isLoading = false;
    })
    this.Subscription.push(sub);
  }

  ngOnDestroy(): void {
  for(let sub of this.Subscription);
  }
}
