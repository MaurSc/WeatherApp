import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {
  @Output() changeC  = new EventEmitter();
  faMagnifyingGlass = faMagnifyingGlass;

  city:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.city.length === 0){
      return alert("field can't be empty");
    }
    let newCity = this.city;
    this.changeC.emit(newCity);
    
    this.city ='';
  }
}
