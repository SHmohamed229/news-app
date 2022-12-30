import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-art-news',
  templateUrl: './art-news.component.html',
  styleUrls: ['./art-news.component.css']
})
export class ArtNewsComponent implements OnInit {
  isLoading :boolean = false;
  artNewsDisplay : any =[];
 private Subscription :Subscription[]=[];
  constructor(
              private _dataApi : NewsApiService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
  let sub =  this._dataApi.artNews().subscribe((res)=>{
          console.log(res);
          this.artNewsDisplay = res.articles;
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
