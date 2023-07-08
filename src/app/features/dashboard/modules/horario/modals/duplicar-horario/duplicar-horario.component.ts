import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-duplicar-horario',
  templateUrl: './duplicar-horario.component.html',
  styleUrls: ['./duplicar-horario.component.scss']
})
export class DuplicarHorarioComponent {

    constructor(private dialogservice: DynamicDialogRef) {}

    cerrarmodal() {
        this.dialogservice.close()
    }
}
