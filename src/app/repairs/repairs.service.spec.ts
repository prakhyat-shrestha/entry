import { TestBed, inject } from '@angular/core/testing';

import { RepairsService } from './repairs.service';

describe('RepairsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepairsService]
    });
  });

  it('should be created', inject([RepairsService], (service: RepairsService) => {
    expect(service).toBeTruthy();
  }));
});
