/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddContaService } from './add-conta.service';

describe('Service: AddConta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddContaService]
    });
  });

  it('should ...', inject([AddContaService], (service: AddContaService) => {
    expect(service).toBeTruthy();
  }));
});
