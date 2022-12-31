import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './components/topheading/topheading.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './Services/news-api.service';
import { HomeComponent } from './components/home/home.component';
import { TechNewsComponent } from './components/tech-news/tech-news.component';
import { BusinessNewsComponent } from './components/business-news/business-news.component';
import { WorldNewsComponent } from './components/world-news/world-news.component';
import { ArtNewsComponent } from './components/art-news/art-news.component';
import { SportsNewsComponent } from './components/sports-news/sports-news.component';
import { ScienceNewsComponent } from './components/science-news/science-news.component';
import { HealthNewsComponent } from './components/health-news/health-news.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PoliticsComponent } from './components/politics/politics.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    HomeComponent,
    TechNewsComponent,
    BusinessNewsComponent,
    WorldNewsComponent,
    ArtNewsComponent,
    SportsNewsComponent,
    ScienceNewsComponent,
    HealthNewsComponent,
    FooterComponent,
    SpinnerComponent,
    PoliticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
