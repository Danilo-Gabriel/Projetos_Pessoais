/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditContaComponent } from './edit-conta.component';

describe('EditContaComponent', () => {
  let component: EditContaComponent;
  let fixture: ComponentFixture<EditContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
