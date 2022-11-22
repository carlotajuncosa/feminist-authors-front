import { TestBed } from '@angular/core/testing';

import { HackersService } from './hackers.service';

describe('HackersService', () => {
  let service: HackersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
