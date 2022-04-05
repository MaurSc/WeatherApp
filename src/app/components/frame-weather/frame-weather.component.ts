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
  lat:number = -34.609654;
  lng:number = -58.390187;
  weather:Weather = WEATHER_INIT;

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
    },() =>{
      this.getWeatherLocationn(this.lat,this.lng)
      alert('check you are allowed to bind your location with our app')
    })
  }

  getWeatherLocationn(lat:number,lng:number){
    this.weatherApiService.getWeatherLocationn(lat,lng).subscribe(res => {
      this.weather = res;
      this.weather.main.temp = Math.floor(this.weather.main.temp - 273.15);
      this.weather.main.temp_min = Math.floor(this.weather.main.temp_min - 273.15);
      this.weather.main.temp_max = Math.floor(this.weather.main.temp_max - 273.15);
    });
  }

}

