import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigupcomponentComponent } from './sigupcomponent.component';

describe('SigupcomponentComponent', () => {
  let component: SigupcomponentComponent;
  let fixture: ComponentFixture<SigupcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigupcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigupcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
