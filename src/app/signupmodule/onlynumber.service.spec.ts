import { TestBed } from '@angular/core/testing';

import { OnlynumberService } from './onlynumber.service';

describe('OnlynumberService', () => {
  let service: OnlynumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlynumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
