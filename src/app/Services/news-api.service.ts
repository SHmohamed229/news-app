import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(
              private _http : HttpClient
  ) { }

  //newsApiUrl
  // newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=df9b5922664145ccb3ecd9c90f37c25e';

  topHeading(): Observable <any>
  {
    // return this._http.get(this.newsApiUrl);
    return this._http.get(environment.newsApiUrl)
    .pipe(
        retry(2),//if in error go call tow because i need sure connected
            catchError(this.handelError)
    );
  }
  worldNews() : Observable <any>
  {
    return this._http.get(environment.world)
    .pipe(
        retry(2),//if in error go call tow because i need sure connected
            catchError(this.handelError)
    );
  }
  busNews() : Observable <any>
  {
    return  this._http.get(environment.Business)
    .pipe(
        retry(2),//if in error go call tow because i need sure connected
            catchError(this.handelError)
    );
  }
  artNews() : Observable <any>
  {
    return this._http.get(environment.arts)
    .pipe(
        retry(2),//if in error go call tow because i need sure connected
            catchError(this.handelError)
    );
  }
  tecNews() : Observable <any>
  {
    return this._http.get(environment.technology)
    .pipe(
        retry(2),//if in error go call tow because i need sure connected
            catchError(this.handelError)
    );
  }
  sportsNews() : Observable <any>
  {
    return this._http.get(environment.Sports)
    .pipe(
        retry(2),//if in error go call tow because i need sure connected
            catchError(this.handelError)
    );
  }
  scienceNews() : Observable <any>
  {
    return this._http.get(environment.science)
    .pipe(
        retry(2),//if in error go call tow because i need sure connected
            catchError(this.handelError)
    );
  }
  healthNews() : Observable <any>
  {
    return this._http.get(environment.health)
    .pipe(
        retry(2),//if in error go call tow because i need sure connected
            catchError(this.handelError)
    );
  }



  private handelError(error : HttpErrorResponse){
    // Generic Error handler
    if(error.status === 0){
      // A clint-side or network error. Handel it accordingly.
      console.error('An Error occurred' , error.error);
    }else{
      // The back-end  returned an unsuccessful response code
      //The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was : ` ,error.error );
    }
      // Write error details in generic errors log

      //Return an Observable with a user-facing error message.

        return throwError(
          ()=> new Error('Something bad happened ; please try again later.')
      );
    }
}
