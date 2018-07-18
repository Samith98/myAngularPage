import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-mul',
  templateUrl: './mul.component.html',
  styleUrls: ['./mul.component.css']
})
export class MulComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    mt1: number;
    mt2: number;
    
    mul(m:NgForm){
      this.mt1=m.value.m1;
      this.mt2=m.value.m2;
      alert(this.mt1*this.mt2);
    }
}
