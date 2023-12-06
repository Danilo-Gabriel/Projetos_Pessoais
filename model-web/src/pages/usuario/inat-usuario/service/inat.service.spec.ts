/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InatService } from './inat.service';

describe('Service: Inat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InatService]
    });
  });

  it('should ...', inject([InatService], (service: InatService) => {
    expect(service).toBeTruthy();
  }));
});
