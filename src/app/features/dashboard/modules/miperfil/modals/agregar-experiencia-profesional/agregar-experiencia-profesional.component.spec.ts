import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExperienciaProfesionalComponent } from './agregar-experiencia-profesional.component';

describe('AgregarExperienciaProfesionalComponent', () => {
  let component: AgregarExperienciaProfesionalComponent;
  let fixture: ComponentFixture<AgregarExperienciaProfesionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarExperienciaProfesionalComponent]
    });
    fixture = TestBed.createComponent(AgregarExperienciaProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
