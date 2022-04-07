import { Component, OnInit } from '@angular/core';
import { style, animate, trigger, state, transition } from '@angular/animations';

import { bgImage } from 'src/app/models/bg-image';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css'],
  animations: [
    trigger('bgImage',[
      state('cold',style({ opacity:1})),
      state('warm',style({ opacity:1})),
      transition('cold <=> warm',[
        style({ 
          opacity:0
        }),
        animate('1s')
      ])
    ])
  ],
})
export class BackgroundImageComponent implements OnInit {
  bgWeather:string="";
  weatherTemp:number=0;
  bgImage:string="";

  ngOnInit(): void {
  }

  getTemp(temp:number){
    this.weatherTemp = temp;
    this.bgImage = temp <=18 ? 'cold' : 'warm';
    this.bgWeather = temp <=18 ? bgImage.cold : bgImage.warm;
  }
}
