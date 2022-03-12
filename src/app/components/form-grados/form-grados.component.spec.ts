import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGradosComponent } from './form-grados.component';

describe('FormGradosComponent', () => {
  let component: FormGradosComponent;
  let fixture: ComponentFixture<FormGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
