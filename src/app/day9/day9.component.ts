import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day9',
  templateUrl: './day9.component.html',
  styleUrls: ['./day9.component.css']
})
export class Day9Component implements OnInit {

  declare age:Number;
  visibility:boolean=false;
  visible:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  login()
  {
    this.visibility=true;
    console.log("Login")
  }
  signup()
  {
    this.visibility=true;
    console.log("Signup")
  }

}
