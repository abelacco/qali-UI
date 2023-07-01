import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProfesionAcademicaComponent } from './agregar-profesion-academica.component';

describe('AgregarProfesionAcademicaComponent', () => {
  let component: AgregarProfesionAcademicaComponent;
  let fixture: ComponentFixture<AgregarProfesionAcademicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProfesionAcademicaComponent]
    });
    fixture = TestBed.createComponent(AgregarProfesionAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
