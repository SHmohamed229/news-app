import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.css']
})
export class ScienceNewsComponent implements OnInit ,OnDestroy{
  isLoading : boolean = false;
  scienceNewsDisplay : any =[];
  private  Subscription : Subscription[]=[]
  constructor(
              private _dataApi : NewsApiService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
  let sub =  this._dataApi.scienceNews().subscribe((res)=>{
      console.log(res);
      this.scienceNewsDisplay = res.articles;
      this.isLoading = false;
    })
    this.Subscription.push(sub);
  }

  ngOnDestroy(): void {
    for( let sub of this.Subscription)
    {
      sub.unsubscribe;
    }
  }

}
