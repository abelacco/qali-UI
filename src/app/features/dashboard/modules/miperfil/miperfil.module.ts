import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiperfilRoutingModule } from './miperfil-routing.module';
import { MiperfilComponent } from './miperfil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalExperienciaProfesionalComponent } from './modals/modal-experiencia-profesional/modal-experiencia-profesional.component';
import { AgregarExperienciaProfesionalComponent } from './modals/agregar-experiencia-profesional/agregar-experiencia-profesional.component';
import { ModalFormacionAcademicaComponent } from './modals/modal-formacion-academica/modal-formacion-academica.component';
import { AgregarProfesionAcademicaComponent } from './modals/agregar-profesion-academica/agregar-profesion-academica.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    MiperfilComponent,
    ModalExperienciaProfesionalComponent,
    AgregarExperienciaProfesionalComponent,
    ModalFormacionAcademicaComponent,
    AgregarProfesionAcademicaComponent
  ],
  imports: [
    CommonModule,
    MiperfilRoutingModule,
    FontAwesomeModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    MultiSelectModule
  ]
})
export class MiperfilModule { }
