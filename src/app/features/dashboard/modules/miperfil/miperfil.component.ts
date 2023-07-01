import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog'
import { ModalExperienciaProfesionalComponent } from './modals/modal-experiencia-profesional/modal-experiencia-profesional.component';
import { AgregarExperienciaProfesionalComponent } from './modals/agregar-experiencia-profesional/agregar-experiencia-profesional.component';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.scss'],
  providers: [DialogService]
})
export class MiperfilComponent implements OnInit {
    constructor(private dialogservice: DialogService) {}

    ngOnInit() {
        this.modalAgregarExperienciaProfesional()
    }

    modalListaExperiencias() {
        this.dialogservice.open(ModalExperienciaProfesionalComponent, {
            width: "823px"
        })
    }

    modalAgregarExperienciaProfesional() {
        this.dialogservice.open(AgregarExperienciaProfesionalComponent, {
            width: "823px",
        })
    }
}
