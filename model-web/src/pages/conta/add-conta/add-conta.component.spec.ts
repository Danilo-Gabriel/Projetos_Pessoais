/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddContaComponent } from './add-conta.component';

describe('AddContaComponent', () => {
  let component: AddContaComponent;
  let fixture: ComponentFixture<AddContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
