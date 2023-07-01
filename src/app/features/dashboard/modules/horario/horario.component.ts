import { Component } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
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
    },{
      value: "15 min"
    }
  ]
  selectedCity = null
}
