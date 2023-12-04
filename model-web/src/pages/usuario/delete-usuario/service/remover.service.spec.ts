/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RemoverService } from './remover.service';

describe('Service: Remover', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoverService]
    });
  });

  it('should ...', inject([RemoverService], (service: RemoverService) => {
    expect(service).toBeTruthy();
  }));
});
