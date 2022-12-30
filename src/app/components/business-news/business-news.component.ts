import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {
  isLoading : boolean = false;
  busNewsDisplay : any = [];
  private  Subscription : Subscription[] = []
  constructor(
              private _dataApi : NewsApiService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
  let sub =  this._dataApi.busNews().subscribe((res)=>{
        console.log(res);
        this.busNewsDisplay = res.articles;
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
