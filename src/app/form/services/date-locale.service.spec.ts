import { TestBed } from '@angular/core/testing';

import { DateLocaleService } from './date-locale.service';

describe('DateLocaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateLocaleService = TestBed.get(DateLocaleService);
    expect(service).toBeTruthy();
  });
});
