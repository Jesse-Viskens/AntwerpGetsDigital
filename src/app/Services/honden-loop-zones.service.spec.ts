import { TestBed } from '@angular/core/testing';

import { HondenLoopZonesService } from './honden-loop-zones.service';

describe('HondenLoopZonesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HondenLoopZonesService = TestBed.get(HondenLoopZonesService);
    expect(service).toBeTruthy();
  });
});
