import { TestBed, inject } from '@angular/core/testing';

import { BabcService } from './babc.service';

describe('BabcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BabcService]
    });
  });

  it('should be created', inject([BabcService], (service: BabcService) => {
    expect(service).toBeTruthy();
  }));
});
