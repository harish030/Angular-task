import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartlistcomponentComponent } from './cartlistcomponent.component';

describe('CartlistcomponentComponent', () => {
  let component: CartlistcomponentComponent;
  let fixture: ComponentFixture<CartlistcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartlistcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartlistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
