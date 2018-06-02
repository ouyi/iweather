import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  getWeather(city: string, state: string): any {
    // lets fake an observable
    // https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3

    return new Observable( observer => {
      observer.next({
        current_observation: 'nice!'
      });
      observer.complete();
    });
  }
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

}
