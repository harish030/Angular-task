import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdereditemcompComponent } from './ordereditemcomp.component';

describe('OrdereditemcompComponent', () => {
  let component: OrdereditemcompComponent;
  let fixture: ComponentFixture<OrdereditemcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdereditemcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdereditemcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
