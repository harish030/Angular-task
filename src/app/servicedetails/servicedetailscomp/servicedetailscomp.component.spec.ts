import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedetailscompComponent } from './servicedetailscomp.component';

describe('ServicedetailscompComponent', () => {
  let component: ServicedetailscompComponent;
  let fixture: ComponentFixture<ServicedetailscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicedetailscompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedetailscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
