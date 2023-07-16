import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ListarCitasComponent } from '../sidebar/modals/listar-citas/listar-citas.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService]
})
export class HeaderComponent {

    constructor(private dialogservice: DialogService) {}


    modalListarCita() {
        this.dialogservice.open(ListarCitasComponent, {
            width: "70rem",
            header: "Citas",
            styleClass: "modal-style"
        })
    }

}
