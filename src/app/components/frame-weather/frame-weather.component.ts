import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


import{ WeatherApiService } from '../../services/weather-api.service';
import{ Weather } from '../../models/weather';
import {WEATHER_INIT} from '../../models/weatherInit';
@Component({
  selector: 'app-frame-weather',
  templateUrl: './frame-weather.component.html',
  styleUrls: ['./frame-weather.component.css']
})
export class FrameWeatherComponent implements OnInit{
  @Output() weatherTemp= new EventEmitter();
  @Input() weather:Weather = WEATHER_INIT;

  constructor( private weatherApiService : WeatherApiService){}
  ngOnInit() {
    this.weatherTemp.emit(this.weather.main.temp);
  }

  getWeathercity(city:string) {
    this.weatherApiService.getWeathercity(city).subscribe(res =>{
      this.weather = res;
      this.weather.main.temp = Math.floor(this.weather.main.temp - 273.15);
      this.weather.main.temp_min = Math.floor(this.weather.main.temp_min - 273.15);
      this.weather.main.temp_max = Math.floor(this.weather.main.temp_max - 273.15);
      this.weatherTemp.emit(this.weather.main.temp);
    });
    
  }
}

