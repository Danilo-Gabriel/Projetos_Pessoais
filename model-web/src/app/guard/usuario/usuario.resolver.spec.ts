import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { usuarioResolver } from './usuario.resolver';

describe('usuarioResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => usuarioResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
