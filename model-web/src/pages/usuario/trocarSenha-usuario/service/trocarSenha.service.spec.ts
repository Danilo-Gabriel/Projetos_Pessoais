/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrocarSenhaService } from './trocarSenha.service';

describe('Service: Trocar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrocarSenhaService]
    });
  });

  it('should ...', inject([TrocarSenhaService], (service: TrocarSenhaService) => {
    expect(service).toBeTruthy();
  }));
});
