import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkticket } from './checkticket';

describe('Checkticket', () => {
  let component: Checkticket;
  let fixture: ComponentFixture<Checkticket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkticket],
    }).compileComponents();

    fixture = TestBed.createComponent(Checkticket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
