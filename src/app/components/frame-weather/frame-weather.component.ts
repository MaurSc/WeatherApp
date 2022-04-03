import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import{ WeatherApiService } from '../../services/weather-api.service';

@Component({
  selector: 'app-frame-weather',
  templateUrl: './frame-weather.component.html',
  styleUrls: ['./frame-weather.component.css']
})
export class FrameWeatherComponent implements OnInit {
  lat:number=-40.7604908;
  lng:number=-58.4287612;


  constructor( private weatherApiService : WeatherApiService){}
  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation() {
    // get Users current position
    navigator.geolocation.getCurrentPosition(position=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

      console.log(this.lat, this.lng);
    },function(){
      alert('user not aasd')
    })
  }
}
