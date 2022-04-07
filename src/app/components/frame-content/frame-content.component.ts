import { Component, OnInit, Input } from '@angular/core';

import { faWind, faCloud, faDroplet, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-frame-content',
  templateUrl: './frame-content.component.html',
  styleUrls: ['./frame-content.component.css']
})
export class FrameContentComponent implements OnInit {
  @Input() tempMin:number =0;
  @Input() tempMax:number =0;
  @Input() wind:number =0;
  @Input() cloud:number =0;
  @Input() pressure:number =0;
  @Input() humidity:number =0;
  //icons
  faWind = faWind;
  faCloud = faCloud;
  faDroplet = faDroplet;
  faGaugeHigh = faGaugeHigh;
  constructor() { }

  ngOnInit(): void {
  }

}
