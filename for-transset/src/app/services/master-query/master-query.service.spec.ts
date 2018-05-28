import { TestBed, inject } from '@angular/core/testing';

import { MasterQueryService } from './master-query.service';

describe('MasterQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterQueryService]
    });
  });

  it('should be created', inject([MasterQueryService], (service: MasterQueryService) => {
    expect(service).toBeTruthy();
  }));
});
