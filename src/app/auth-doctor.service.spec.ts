import { TestBed } from '@angular/core/testing';

import { AuthDoctorService } from './auth-doctor.service';

describe('AuthDoctorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthDoctorService = TestBed.get(AuthDoctorService);
    expect(service).toBeTruthy();
  });
});
