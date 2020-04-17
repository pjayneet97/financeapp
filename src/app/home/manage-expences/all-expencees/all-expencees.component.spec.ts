import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExpenceesComponent } from './all-expencees.component';

describe('AllExpenceesComponent', () => {
  let component: AllExpenceesComponent;
  let fixture: ComponentFixture<AllExpenceesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllExpenceesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExpenceesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
