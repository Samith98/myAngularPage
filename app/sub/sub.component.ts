import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  st1: number;
  st2: number;

  sub(s:NgForm){
    this.st1=s.value.s1;
    this.st2=s.value.s2;
    alert(this.st1-this.st2);
  }
}
