import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionGradosComponent } from './conversion-grados.component';

describe('ConversionGradosComponent', () => {
  let component: ConversionGradosComponent;
  let fixture: ComponentFixture<ConversionGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionGradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
