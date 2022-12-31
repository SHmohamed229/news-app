// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  newsApiUrl : 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=df9b5922664145ccb3ecd9c90f37c25e',
  politics :'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=df9b5922664145ccb3ecd9c90f37c25e',
  world : 'https://newsapi.org/v2/everything?q=Apple&from=2022-12-28&sortBy=popularity&apiKey=df9b5922664145ccb3ecd9c90f37c25e',
  Business:  'https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=df9b5922664145ccb3ecd9c90f37c25e',
  Sports:  'https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=df9b5922664145ccb3ecd9c90f37c25e',
  arts:  'https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=df9b5922664145ccb3ecd9c90f37c25e',
  health:  'https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=df9b5922664145ccb3ecd9c90f37c25e',
  technology:  'https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=df9b5922664145ccb3ecd9c90f37c25e',
  science:  'https://newsapi.org/v2/top-headlines?country=eg&category=science&apiKey=df9b5922664145ccb3ecd9c90f37c25e',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
