import { Component, OnInit } from '@angular/core';
import { style, animate, trigger, state, transition } from '@angular/animations';

import { bgImage } from 'src/app/models/bg-image';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { Weather } from 'src/app/models/weather';
import { WEATHER_INIT } from 'src/app/models/weatherInit';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css'],
  animations: [
    trigger('bgImage',[
      state('cold',style({ opacity:1})),
      state('warm',style({ opacity:1})),
      transition('* <=> *',[
        style({ 
          opacity:0
        }),
        animate('1.5s')
      ])
    ])
  ],
})
export class BackgroundImageComponent implements OnInit {
  weather:Weather = WEATHER_INIT;
  weatherTemp:number=0;
  bgImage:string="";
  lat:number = -34.609654;
  lng:number = -58.390187;
  bgWeather: string="";
  loading:boolean=true;

  constructor( private weatherApiService : WeatherApiService){}
  ngOnInit(): void {
    this.getUserLocation();
  }
  getUserLocation() {
    // get Users current position
    navigator.geolocation.getCurrentPosition(position=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.getWeatherLocationn(this.lat,this.lng);
      this.getTemp(this.weather.main.temp)
      this.loading = !this.loading;
    },() =>{
      alert('check you are allowed to bind your location with our app')
      this.getWeatherLocationn(this.lat,this.lng);
      this.getTemp(this.weather.main.temp)
      this.loading = !this.loading;
    })
    
  }
  getWeatherLocationn(lat:number,lng:number){
    this.weatherApiService.getWeatherLocationn(lat,lng).subscribe((res: any) => {
      this.weather = res;
      this.weather.main.temp = Math.floor(this.weather.main.temp - 273.15);
      this.getTemp(this.weather.main.temp)
    });
    
  }
  getTemp(temp:number){
    this.weatherTemp = temp;
    this.bgImage = temp <=18 ? 'cold' : 'warm';
    this.bgWeather = temp <=18 ? bgImage.cold : bgImage.warm;
  }
}

