import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog'
import { ModalExperienciaProfesionalComponent } from './modals/modal-experiencia-profesional/modal-experiencia-profesional.component';
import { AgregarExperienciaProfesionalComponent } from './modals/agregar-experiencia-profesional/agregar-experiencia-profesional.component';
import { ModalFormacionAcademicaComponent } from './modals/modal-formacion-academica/modal-formacion-academica.component';
import { AgregarProfesionAcademicaComponent } from './modals/agregar-profesion-academica/agregar-profesion-academica.component';

@Component({
    selector: 'app-miperfil',
    templateUrl: './miperfil.component.html',
    styleUrls: ['./miperfil.component.scss'],
    providers: [DialogService]
})
export class MiperfilComponent implements OnInit {

    cities: any = [
      {
        value: "ponte"
      },
      {
        value: "en"
      },{
        value: "4 pata"
      }
    ]
    selectedCity = null
    selectedCities = []

    constructor(private dialogservice: DialogService) { }

    ngOnInit() {

    }

    modalListaExperiencias() {
        this.dialogservice.open(ModalExperienciaProfesionalComponent, {
            width: "823px"
        })
    }

    modalFormacionAcademica() {
        this.dialogservice.open(ModalFormacionAcademicaComponent, {
            width: "823px",
        })
    }

}
