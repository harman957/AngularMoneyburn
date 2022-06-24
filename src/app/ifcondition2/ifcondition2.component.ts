import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifcondition2',
  templateUrl: './ifcondition2.component.html',
  styleUrls: ['./ifcondition2.component.css']
})
export class Ifcondition2Component implements OnInit {

  declare age:Number;
  visibility:boolean=false;
  visible:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  checkage()
  {
    this.visibility=true;
    if (this.age>=18)
    {
      this.visible=true;
    }
    else
    {
      this.visible=false;
    }
  }


}
