import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoninformationComponent } from './personinformation.component';

describe('PersoninformationComponent', () => {
  let component: PersoninformationComponent;
  let fixture: ComponentFixture<PersoninformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoninformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoninformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
