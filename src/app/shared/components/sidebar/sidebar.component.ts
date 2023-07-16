import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CrearCitaComponent } from './modals/crear-cita/crear-cita.component';
import { ListarCitasComponent } from './modals/listar-citas/listar-citas.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [DialogService]
})
export class SidebarComponent {

    constructor(private dialogservice: DialogService) {}

}
