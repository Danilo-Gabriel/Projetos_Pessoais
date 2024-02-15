/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditContaService } from './edit-conta.service';

describe('Service: EditConta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditContaService]
    });
  });

  it('should ...', inject([EditContaService], (service: EditContaService) => {
    expect(service).toBeTruthy();
  }));
});
