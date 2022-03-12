import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoGradosComponent } from './resultado-grados.component';

describe('ResultadoGradosComponent', () => {
  let component: ResultadoGradosComponent;
  let fixture: ComponentFixture<ResultadoGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoGradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
