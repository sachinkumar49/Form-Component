import { TestBed } from '@angular/core/testing';

import { FormDataService } from '../services/form-data.service';

describe('FormDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormDataService = TestBed.get(FormDataService);
    expect(service).toBeTruthy();
  });
});
