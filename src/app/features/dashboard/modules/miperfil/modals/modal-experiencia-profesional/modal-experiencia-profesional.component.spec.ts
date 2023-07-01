import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperienciaProfesionalComponent } from './modal-experiencia-profesional.component';

describe('ModalExperienciaProfesionalComponent', () => {
  let component: ModalExperienciaProfesionalComponent;
  let fixture: ComponentFixture<ModalExperienciaProfesionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExperienciaProfesionalComponent]
    });
    fixture = TestBed.createComponent(ModalExperienciaProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
