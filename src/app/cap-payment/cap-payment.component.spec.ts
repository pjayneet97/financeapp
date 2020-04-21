import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapPaymentComponent } from './cap-payment.component';

describe('CapPaymentComponent', () => {
  let component: CapPaymentComponent;
  let fixture: ComponentFixture<CapPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
