import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { Day7Component } from './day7/day7.component';
import { IfconditionComponent } from './ifcondition/ifcondition.component';
import { Ifcondition2Component } from './ifcondition2/ifcondition2.component';
import { Day9Component } from './day9/day9.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    Day7Component,
    IfconditionComponent,
    Ifcondition2Component,
    Day9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
