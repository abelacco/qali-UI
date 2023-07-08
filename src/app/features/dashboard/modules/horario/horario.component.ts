import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DuplicarHorarioComponent } from './modals/duplicar-horario/duplicar-horario.component';

@Component({
    selector: 'app-horario',
    templateUrl: './horario.component.html',
    styleUrls: ['./horario.component.scss'],
    providers: [DialogService]
})
export class HorarioComponent {
    date = new Date()
    numerovista = 0
    checked = false
    cities: any = [
        {
            value: "5 min"
        },
        {
            value: "10 min"
        }, {
            value: "15 min"
        }
    ]
    selectedCity = null

    constructor(private dialogservice: DialogService) {}

    modalDuplicarHora() {
        this.dialogservice.open(DuplicarHorarioComponent, {
            width: "500px"
        })
    }

    ngOnInit() {

    }

}
