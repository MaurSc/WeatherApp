import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import{ WeatherApiService } from '../../services/weather-api.service';
import{ Weather } from '../../models/weather';
import {WEATHER_INIT} from '../../models/weatherInit';
@Component({
  selector: 'app-frame-weather',
  templateUrl: './frame-weather.component.html',
  styleUrls: ['./frame-weather.component.css']
})
export class FrameWeatherComponent implements OnInit{
  lat:number=0;
  lng:number=0;

  weather:Weather=WEATHER_INIT;

  constructor( private weatherApiService : WeatherApiService){}
  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation() {
    // get Users current position
    navigator.geolocation.getCurrentPosition(position=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.getWeatherLocationn(this.lat,this.lng);
    },function(){
      alert('check you are allowed to bind your location with our app')
    })
  }

  getWeatherLocationn(lat:number,lng:number){
    this.weatherApiService.getWeatherLocationn(lat,lng).subscribe(res => {
      this.weather = res;
    });
  }

}
