import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InatAtivUsuarioComponent } from './inat-ativ-usuario.component';

describe('InatAtivUsuarioComponent', () => {
  let component: InatAtivUsuarioComponent;
  let fixture: ComponentFixture<InatAtivUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InatAtivUsuarioComponent]
    });
    fixture = TestBed.createComponent(InatAtivUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
