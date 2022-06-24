import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifcondition2Component } from './ifcondition2.component';

describe('Ifcondition2Component', () => {
  let component: Ifcondition2Component;
  let fixture: ComponentFixture<Ifcondition2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ifcondition2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ifcondition2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
