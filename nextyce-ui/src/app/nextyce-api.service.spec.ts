import { TestBed } from '@angular/core/testing';

import { NextyceApiService } from './nextyce-api.service';

describe('NextyceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextyceApiService = TestBed.get(NextyceApiService);
    expect(service).toBeTruthy();
  });
});
