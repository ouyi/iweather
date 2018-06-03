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
        current_observation: {
          display_location: {
            full: `${city}, ${state}`
          },
          icon_url: 'http://openweathermap.org/img/w/02d.png',
          weather: 'few clouds',
          temp_f: 90.2,
          temperature_string: '90.2 F (32.2 C)',
          relative_humidity: '62%',
          visibility: '10%',
          wind_speed: 16.8
        }
      });
      observer.complete();
    });
  }
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

}
