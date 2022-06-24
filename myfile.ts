/*  * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * *
* * * * DAY 5 IN-CLASS * * * * 
 * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * */

// class myclass
// {
//     a!:number;
//     b!:number;
//     c!:number;

//     initialize(x:number, y:number)
//     {
//         this.a=x;
//         this.b=y;
//     }
//     calculate()
//     {
//         this.c=this.a+this.b;
//     }
//     output()
//     {
//         console.log("Sum is " + this.c);
//     }
// }

// var obj = new myclass;
// obj.initialize(10,30);
// obj.calculate();
// obj.output();


/*  * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * *
* * * * DAY 5 ASSIGNMENT * * * * 
 * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * */

// class myclass
// {
//     P!:number;
//     R!:number;
//     T!:number;
//     SI!:number;
//     TA!:number;

//     initialize(x:number, y:number, z:number)
//     {
//         this.P=x;
//         this.R=y;
//         this.T=z;
//     }
//     calculate()
//     {
//         this.SI=this.P*this.R*this.T/100;
//         this.TA=this.P+this.SI;
//     }
//     output()
//     {
//         console.log("SI is " + this.SI);
//         console.log("SI is " + this.TA);
//     }
// }

// var obj = new myclass;
// obj.initialize(20000,7.6,1);
// obj.calculate();
// obj.output();

/*  * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * *
* * * * DAY 6 IN-CLASS * * * * 
 * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * */

// class myclass
// {
//     x1:number=50;
//     c!:number;
//     constructor(x:number, y:number, z?:number)
//     {
//         if(z==null)
//         {
//             this.c=x+y;
//         }
//         else
//         {
//             this.c=x+y+z;
//         }
//     }
//     output()
//     {
//         console.log("Sum is " + this.c);
//     }
// }

// class myclass2 extends myclass
// {
//     x2:number=100;
//     result!:number;
//     calculate2()
//     {
//         this.result=this.x1+this.x2;
//     }
//     output2()
//     {
//         console.log("Sum is " + this.result);
//     }
// }

// var obj = new myclass2(10,20); // var obj = new childClassDaName
// // obj.calculate(10,20); //if not constructor then we have to call
// obj.output();
// obj.calculate2();
// obj.output2();


/*  * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * *
* * * * DAY 6 ASSIGNMENT * * * * 
 * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * */

class myclass
{
    result!:number;
    constructor(a:number, b:number, c?:number, d?:number)
    {
        if(c!=null&&d==null)
        {
            this.result=a*b*c;
        }
        else if(c==null&&d==null)
        {
            this.result=a*b;
        }
        else if (c!=null&&d!=null)
        {
            this.result=a*b*c*d/4;
        }

    }
    output()
    {
        console.log("Result is " + this.result);
    }
}

var obj = new myclass(10,10,10,10);
obj.output();