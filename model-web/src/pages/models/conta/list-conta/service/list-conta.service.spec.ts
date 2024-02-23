/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListContaService } from './list-conta.service';

describe('Service: ListConta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListContaService]
    });
  });

  it('should ...', inject([ListContaService], (service: ListContaService) => {
    expect(service).toBeTruthy();
  }));
});
