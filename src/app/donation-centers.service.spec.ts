import { TestBed } from '@angular/core/testing';

import { DonationCentersService } from './donation-centers.service';

describe('DonationCentersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationCentersService = TestBed.get(DonationCentersService);
    expect(service).toBeTruthy();
  });
});
