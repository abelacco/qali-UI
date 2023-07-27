import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AgregarEnfermedadComponent } from '../../modals/agregar-enfermedad/agregar-enfermedad.component';

@Component({
  selector: 'app-historial-clinica-paciente',
  templateUrl: './historial-clinica-paciente.component.html',
  styleUrls: ['./historial-clinica-paciente.component.scss'],
  providers: [DialogService]
})
export class HistorialClinicaPacienteComponent {
  cities: any = [
    {
        value: "1"
    },
    {
        value: "2"
    },
    {
        value: "3"
    }
  ]

  calidadsueno = [
    {
        value: "Baja"
    },
    {
        value: "Media"
    },
    {
        value: "Alta"
    }
  ]

  selectcalidad = null

  mostrarenfermedades = false;
  mostraralergias = false;

  selectedCity = null

  constructor(private dialogservice: DialogService) {}


  modalAgregarEnfermedad(tipo : any) {
    this.dialogservice.open(AgregarEnfermedadComponent, {
        width: "700px",
        header: "Ingrese su " + tipo,
        styleClass: "modal-style",
        data: {
            tipo: tipo
        }
    }).onClose.subscribe(() => {
        if(tipo == "alergias") {
            this.mostraralergias = true
        }else {
            this.mostrarenfermedades = true
        }
    })
  }
}
