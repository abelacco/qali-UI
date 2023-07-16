import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-clinica-paciente',
  templateUrl: './historial-clinica-paciente.component.html',
  styleUrls: ['./historial-clinica-paciente.component.scss']
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

  mostrarenfermedades = false;
  mostraralergias = false;

  selectedCity = null
}
