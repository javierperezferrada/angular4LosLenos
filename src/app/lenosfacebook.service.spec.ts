import { TestBed, inject } from '@angular/core/testing';

import { LenosfacebookService } from './lenosfacebook.service';

describe('LenosfacebookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LenosfacebookService]
    });
  });

  it('should be created', inject([LenosfacebookService], (service: LenosfacebookService) => {
    expect(service).toBeTruthy();
  }));
});
