import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormacionAcademicaComponent } from './modal-formacion-academica.component';

describe('ModalFormacionAcademicaComponent', () => {
  let component: ModalFormacionAcademicaComponent;
  let fixture: ComponentFixture<ModalFormacionAcademicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFormacionAcademicaComponent]
    });
    fixture = TestBed.createComponent(ModalFormacionAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
