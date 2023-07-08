import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioRoutingModule } from './horario-routing.module';
import { HorarioComponent } from './horario.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DuplicarHorarioComponent } from './modals/duplicar-horario/duplicar-horario.component';

@NgModule({
  declarations: [
    HorarioComponent,
    DuplicarHorarioComponent
  ],
  imports: [
    CommonModule,
    HorarioRoutingModule,
    CalendarModule,
    FormsModule,
    FontAwesomeModule,
    CheckboxModule,
    DropdownModule
  ]
})
export class HorarioModule { }
