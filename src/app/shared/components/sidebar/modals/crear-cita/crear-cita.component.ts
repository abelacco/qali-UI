import { Component } from '@angular/core';

@Component({
    selector: 'app-crear-cita',
    templateUrl: './crear-cita.component.html',
    styleUrls: ['./crear-cita.component.scss']
})
export class CrearCitaComponent {
    cities: any = [
        {
            value: "ponte"
        },
        {
            value: "en"
        }, {
            value: "4 pata"
        }
    ]

    numerovista = 1

    selectedCity = null

    date = new Date()

    constructor() {}
}
