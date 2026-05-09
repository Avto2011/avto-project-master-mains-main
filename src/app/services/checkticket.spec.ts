import { TestBed } from '@angular/core/testing';

import { Checkticket } from './checkticket';

describe('Checkticket', () => {
  let service: Checkticket;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Checkticket);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
