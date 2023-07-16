import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CrearCitaComponent } from '../crear-cita/crear-cita.component';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.scss'],
  providers: [DialogService]
})
export class ListarCitasComponent {
    examplevalues = [
        // {
        //   apellidos: "abelaca en",
        //   nombres: "4 fast",
        //   dni: 12345678,
        //   celular: 987654321,
        // },
        // {
        //   apellidos: "en 4 fast",
        //   nombres: "abelaca ctmre",
        //   dni: 12345678,
        //   celular: 987654321,
        // }
      ]

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

    date = new Date()
    selectedCity = null

    constructor(private dialogservice: DialogService) {}

    modalCrearCita() {
        this.dialogservice.open(CrearCitaComponent, {
            width: "600px"
        })
    }

}
