import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Weather } from '../models/weather';
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private keyApi:string ='cc84017065726dad626b59b5e56102a7'
  constructor(private http:HttpClient) { }

  getWeatherLocationn(lat:number,lng:number):Observable <Weather>{
    return this.http.get<Weather>('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid='+this.keyApi)
    .pipe(map(res => res));
  }
}

