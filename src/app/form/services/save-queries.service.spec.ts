import { TestBed } from '@angular/core/testing';

import { SaveQueriesService } from './save-queries.service';

describe('SaveQueriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveQueriesService = TestBed.get(SaveQueriesService);
    expect(service).toBeTruthy();
  });
});
