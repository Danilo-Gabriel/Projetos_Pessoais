/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppMessageService } from './app-message.service';

describe('Service: AppMessage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppMessageService]
    });
  });

  it('should ...', inject([AppMessageService], (service: AppMessageService) => {
    expect(service).toBeTruthy();
  }));
});
