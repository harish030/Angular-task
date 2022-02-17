import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvslandingpageComponent } from './tvslandingpage.component';

describe('TvslandingpageComponent', () => {
  let component: TvslandingpageComponent;
  let fixture: ComponentFixture<TvslandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvslandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvslandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
