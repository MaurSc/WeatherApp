import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Weather-App';
  isLoad = 'false';
  load:boolean = false;
  notLoad:boolean = true;

  ngOnInit(){
    setTimeout(() =>{
      this.load=!this.load;
      this.notLoad=!this.notLoad;
    },4000)
  }
    


}
