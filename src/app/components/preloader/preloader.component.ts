import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css'],
  animations: [
    trigger('loading',[
      state('true',style({ opacity:1})),
      state('false',style({ opacity:0})),
      transition('* => *',[
        style({ 
          opacity:0
        }),
        animate('2.5s')
      ])
    ])
  ],
})
export class PreloaderComponent implements OnInit {
@Input() loading:boolean=true;
isLoading:string = 'true';

  ngOnInit(): void {
    
  }

}
