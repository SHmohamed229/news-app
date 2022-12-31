import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtNewsComponent } from './components/art-news/art-news.component';
import { BusinessNewsComponent } from './components/business-news/business-news.component';
import { HealthNewsComponent } from './components/health-news/health-news.component';
import { HomeComponent } from './components/home/home.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { ScienceNewsComponent } from './components/science-news/science-news.component';
import { SportsNewsComponent } from './components/sports-news/sports-news.component';
import { TechNewsComponent } from './components/tech-news/tech-news.component';
import { TopheadingComponent } from './components/topheading/topheading.component';
import { WorldNewsComponent } from './components/world-news/world-news.component';

const routes: Routes = [
  {path : 'news' , children:[
    {path : '' , redirectTo : 'home', pathMatch :'full' },
    {path : 'home' , component : HomeComponent},
    {path : 'politics' , component : PoliticsComponent},
    {path : 'world' , component : WorldNewsComponent},
    {path : 'business' , component : BusinessNewsComponent},
    {path : 'art' , component : ArtNewsComponent},
    {path : 'tec' , component : TechNewsComponent},
    {path : 'sport' , component : SportsNewsComponent},
    {path : 'science' , component : ScienceNewsComponent},
    {path : 'science' , component : ScienceNewsComponent},
    {path : 'health' , component : HealthNewsComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
