import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEnfermedadComponent } from './agregar-enfermedad.component';

describe('AgregarEnfermedadComponent', () => {
  let component: AgregarEnfermedadComponent;
  let fixture: ComponentFixture<AgregarEnfermedadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEnfermedadComponent]
    });
    fixture = TestBed.createComponent(AgregarEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
