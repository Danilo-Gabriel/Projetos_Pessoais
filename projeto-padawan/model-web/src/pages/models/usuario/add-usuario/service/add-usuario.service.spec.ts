/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddUsuarioService } from './add-usuario.service';

describe('Service: AddUsuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddUsuarioService]
    });
  });

  it('should ...', inject([AddUsuarioService], (service: AddUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
