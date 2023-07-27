import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-agregar-enfermedad',
  templateUrl: './agregar-enfermedad.component.html',
  styleUrls: ['./agregar-enfermedad.component.scss'],
  providers: [DialogService]
})
export class AgregarEnfermedadComponent {

    tipo = null

    constructor(private dialogservice: DynamicDialogRef, private dialogserviceref: DynamicDialogConfig) {
        this.tipo = this.dialogserviceref.data?.tipo
    }

    cerrarmodal() {
        this.dialogservice.close()
    }
}
