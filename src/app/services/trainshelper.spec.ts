import { TestBed } from '@angular/core/testing';

import { Trainshelper } from './trainshelper';

describe('Trainshelper', () => {
  let service: Trainshelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Trainshelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
