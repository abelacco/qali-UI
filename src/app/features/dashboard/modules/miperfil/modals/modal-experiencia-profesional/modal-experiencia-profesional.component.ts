import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AgregarProfesionAcademicaComponent } from '../agregar-profesion-academica/agregar-profesion-academica.component';
import { AgregarExperienciaProfesionalComponent } from '../agregar-experiencia-profesional/agregar-experiencia-profesional.component';

@Component({
    selector: 'app-modal-experiencia-profesional',
    templateUrl: './modal-experiencia-profesional.component.html',
    styleUrls: ['./modal-experiencia-profesional.component.scss']
})
export class ModalExperienciaProfesionalComponent {

    constructor(private dialogservice: DialogService) { }

    modalAgregarExperienciaProfesional() {
        this.dialogservice.open(AgregarExperienciaProfesionalComponent, {
            width: "823px",
        })
    }

}
