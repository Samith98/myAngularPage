import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dt1: number;
  dt2: number;

  div(d:NgForm){
    this.dt1=d.value.d1;
    this.dt2=d.value.d2;
    alert(this.dt1/this.dt2);
  }
}
