import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  at1: number;
  at2: number;

  add(a:NgForm){
    this.at1=a.value.a1;
    this.at2=a.value.a2;
    alert(this.at1*1+this.at2*1);
  }
}
