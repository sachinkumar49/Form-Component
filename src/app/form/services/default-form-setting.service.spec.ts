import { TestBed } from '@angular/core/testing';

import { DefaultFormSettingService } from './default-form-setting.service';

describe('DefaultFormSettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultFormSettingService = TestBed.get(DefaultFormSettingService);
    expect(service).toBeTruthy();
  });
});
