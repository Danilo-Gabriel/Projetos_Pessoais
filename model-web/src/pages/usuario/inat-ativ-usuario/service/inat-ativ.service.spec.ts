import { TestBed } from '@angular/core/testing';

import { InatAtivService } from './inat-ativ.service';

describe('InatAtivService', () => {
  let service: InatAtivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InatAtivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
