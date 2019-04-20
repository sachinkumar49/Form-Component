import { TestBed } from '@angular/core/testing';

import { BuildRequestService } from './build-request.service';

describe('BuildRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildRequestService = TestBed.get(BuildRequestService);
    expect(service).toBeTruthy();
  });
});
