/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListUsuarioService } from './list-usuario.service';

describe('Service: ListUsuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListUsuarioService]
    });
  });

  it('should ...', inject([ListUsuarioService], (service: ListUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
