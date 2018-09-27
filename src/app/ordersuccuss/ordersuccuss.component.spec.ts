import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersuccussComponent } from './ordersuccuss.component';

describe('OrdersuccussComponent', () => {
  let component: OrdersuccussComponent;
  let fixture: ComponentFixture<OrdersuccussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersuccussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersuccussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
