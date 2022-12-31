import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit , OnDestroy{
  isLoading : boolean = false;
  politicsNewsDisplay : any =[];
  private  Subscription : Subscription[]=[]
  constructor(
              private _dataApi : NewsApiService,
  ) {

  }

  ngOnInit(): void {
    this.isLoading = true;
    let sub = this._dataApi.politicNews().subscribe((res)=>{
        console.log(res);
        this.politicsNewsDisplay = res.articles;
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
