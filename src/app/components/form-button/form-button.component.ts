import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  constructor() { }

  ngOnInit(): void {
  }

}
