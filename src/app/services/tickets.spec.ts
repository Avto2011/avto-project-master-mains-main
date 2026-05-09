import { TestBed } from '@angular/core/testing';
import { Tickets } from '../tickets/tickets';

describe('TicketService', () => {
  let service: Tickets;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tickets);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
