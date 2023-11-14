import { TestBed } from '@angular/core/testing';

import { AddUsuariosService } from './add-usuarios.service';

describe('AddUsuariosService', () => {
  let service: AddUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
