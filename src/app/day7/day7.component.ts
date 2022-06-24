import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.css']
})
export class Day7Component implements OnInit {

  declare message:string;
  declare color:string;
  declare fontsize:number;
  declare fontface:string;

  constructor() { }

  ngOnInit(): void {
  }

  button1()
  {
    this.message="Hello ji, Ki haal chaal?";
  }
  button2()
  {
    this.message='';
  }
  button3()
  {
    this.color='red';
    this.fontsize=7;
    this.fontface='comic sans MS';
  }
  button4()
  {
    this.color='Black';
    this.fontsize=3;
    this.fontface='';
  }

}
