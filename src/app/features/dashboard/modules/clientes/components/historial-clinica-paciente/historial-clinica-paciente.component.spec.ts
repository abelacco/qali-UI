import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialClinicaPacienteComponent } from './historial-clinica-paciente.component';

describe('HistorialClinicaPacienteComponent', () => {
  let component: HistorialClinicaPacienteComponent;
  let fixture: ComponentFixture<HistorialClinicaPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialClinicaPacienteComponent]
    });
    fixture = TestBed.createComponent(HistorialClinicaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
