import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { HistorialClinicaPacienteComponent } from './components/historial-clinica-paciente/historial-clinica-paciente.component';

import { CheckboxModule } from 'primeng/checkbox';
import { AgregarEnfermedadComponent } from './modals/agregar-enfermedad/agregar-enfermedad.component';


@NgModule({
  declarations: [
    ClientesComponent,
    HistorialClinicaPacienteComponent,
    AgregarEnfermedadComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ButtonModule,
    FontAwesomeModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    TableModule,
    CheckboxModule
  ]
})
export class ClientesModule { }
