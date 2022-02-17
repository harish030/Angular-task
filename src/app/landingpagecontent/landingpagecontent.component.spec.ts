import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagecontentComponent } from './landingpagecontent.component';

describe('LandingpagecontentComponent', () => {
  let component: LandingpagecontentComponent;
  let fixture: ComponentFixture<LandingpagecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpagecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpagecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
