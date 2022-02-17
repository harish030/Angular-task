import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsFooterComponent } from './tvs-footer.component';

describe('TvsFooterComponent', () => {
  let component: TvsFooterComponent;
  let fixture: ComponentFixture<TvsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
