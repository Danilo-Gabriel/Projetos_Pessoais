/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlterarSenhaService } from './alterar-senha.service';


describe('Service: Trocar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlterarSenhaService]
    });
  });

  it('should ...', inject([AlterarSenhaService], (service: AlterarSenhaService) => {
    expect(service).toBeTruthy();
  }));
});
