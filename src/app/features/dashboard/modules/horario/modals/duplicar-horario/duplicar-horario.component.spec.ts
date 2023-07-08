import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicarHorarioComponent } from './duplicar-horario.component';

describe('DuplicarHorarioComponent', () => {
  let component: DuplicarHorarioComponent;
  let fixture: ComponentFixture<DuplicarHorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuplicarHorarioComponent]
    });
    fixture = TestBed.createComponent(DuplicarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
