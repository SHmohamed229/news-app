import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsApiService } from 'src/app/Services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

  isLoading : boolean = false;
  topHeadingDisplay  : any = [];
 private Subscription :Subscription[]=[];
  constructor(
              private _dataApi :NewsApiService
  ) { }


  ngOnInit(): void {
    this.isLoading = true;
    let sub =  this._dataApi.topHeading().subscribe((res)=>{
      console.log(res);
      this.topHeadingDisplay = res.articles
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
