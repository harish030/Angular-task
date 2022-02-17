import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcartcomponentComponent } from './addcartcomponent.component';

describe('AddcartcomponentComponent', () => {
  let component: AddcartcomponentComponent;
  let fixture: ComponentFixture<AddcartcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcartcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
