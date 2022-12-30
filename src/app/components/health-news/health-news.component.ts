import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css']
})
export class HealthNewsComponent implements OnInit {
  isLoading : boolean = false;
  healthNewsDisplay : any =[];
 private  Subscription : Subscription[]=[];
  constructor(
              private _dataApi : NewsApiService,
  ) { }

  ngOnInit(): void {
  this.isLoading = true;
  let sub =  this._dataApi.healthNews().subscribe((res)=>{
      console.log(res);
      this.healthNewsDisplay = res.articles;
  this.isLoading = false;
    })
    this.Subscription.push(sub);
  }
  ngOnDestroy(): void {
    for(let sub of this.Subscription){
      sub.unsubscribe
    }
    }
}
