import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfconditionComponent } from './ifcondition.component';

describe('IfconditionComponent', () => {
  let component: IfconditionComponent;
  let fixture: ComponentFixture<IfconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfconditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
