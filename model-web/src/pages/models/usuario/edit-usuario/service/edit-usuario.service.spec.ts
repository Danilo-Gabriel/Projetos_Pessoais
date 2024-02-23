/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditUsuarioService } from './edit-usuario.service';

describe('Service: EditUsuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditUsuarioService]
    });
  });

  it('should ...', inject([EditUsuarioService], (service: EditUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
