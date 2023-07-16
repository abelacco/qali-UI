import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { RouterModule } from '@angular/router'; // Importa RouterModule aquí
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CrearCitaComponent } from './components/sidebar/modals/crear-cita/crear-cita.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ListarCitasComponent } from './components/sidebar/modals/listar-citas/listar-citas.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CrearCitaComponent,
    ListarCitasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    FormsModule,
    DropdownModule
  ],
  exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class SharedModule { }
