import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifcondition',
  templateUrl: './ifcondition.component.html',
  styleUrls: ['./ifcondition.component.css']
})
export class IfconditionComponent implements OnInit {

  constructor ( ) { }
  
  ngOnInit ( ) : void {
  }

  declare name : string ;
  declare age : number ;
  declare sal : number ;
  declare bonus : number ;
  declare tsal : number ;

  visibility:boolean=false;

  calculate( )
  {
    this.visibility=true;
    if (this.age>=50 && this.age<35)
    {
      this.bonus = (10 * this.sal) / 100 ;
    }
    else if(this.age>=35 && this.age<50)
    {
      this.bonus = (8.7 * this.sal) / 100 ;
    }
    else if(this.age>=20)
    {
      this.bonus = (6.5 * this.sal) / 100 ;
    }
    else
    { 
      this.bonus= 0;
    }
    this.tsal = Number(this.sal) + Number(this.bonus);
  }

} 
