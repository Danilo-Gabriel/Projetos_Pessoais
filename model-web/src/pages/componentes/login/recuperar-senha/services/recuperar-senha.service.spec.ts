/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecuperarSenhaService } from './recuperar-senha.service';

describe('Service: RecuperarSenha', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecuperarSenhaService]
    });
  });

  it('should ...', inject([RecuperarSenhaService], (service: RecuperarSenhaService) => {
    expect(service).toBeTruthy();
  }));
});
