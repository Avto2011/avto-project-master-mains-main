import { TestBed } from '@angular/core/testing';

import { Trainses } from './trainses';

describe('Trainses', () => {
  let service: Trainses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Trainses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
