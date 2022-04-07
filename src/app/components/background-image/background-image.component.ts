import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css']
})
export class BackgroundImageComponent implements OnInit {
  bgWeather:string = '../../../assets/imgs/calido.png';
  weatherTemp:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  getTemp(temp:number){
    this.weatherTemp = temp;
  }
}
