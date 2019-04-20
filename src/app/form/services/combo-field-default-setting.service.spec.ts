import { TestBed } from '@angular/core/testing';

import { ComboFieldDefaultSettingService } from './combo-field-default-setting.service';

describe('ComboFieldDefaultSettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComboFieldDefaultSettingService = TestBed.get(ComboFieldDefaultSettingService);
    expect(service).toBeTruthy();
  });
});
