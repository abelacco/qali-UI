import { Component } from '@angular/core';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

    examplevalues = [
      {
        apellidos: "abelaca",
        nombres: "abelaca",
        dni: 12345678,
        celular: 987654321,
      },
      {
        apellidos: "1",
        nombres: "abelaca",
        dni: 12345678,
        celular: 987654321,
      }
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
}
