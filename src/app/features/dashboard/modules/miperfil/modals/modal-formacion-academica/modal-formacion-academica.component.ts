import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AgregarExperienciaProfesionalComponent } from '../agregar-experiencia-profesional/agregar-experiencia-profesional.component';
import { AgregarProfesionAcademicaComponent } from '../agregar-profesion-academica/agregar-profesion-academica.component';

@Component({
    selector: 'app-modal-formacion-academica',
    templateUrl: './modal-formacion-academica.component.html',
    styleUrls: ['./modal-formacion-academica.component.scss']
})
export class ModalFormacionAcademicaComponent {

    constructor(private dialogservice: DialogService) { }

    modalAgregarProfesionAcademica() {
        this.dialogservice.open(AgregarProfesionAcademicaComponent, {
            width: "823px",
        })
    }
}
