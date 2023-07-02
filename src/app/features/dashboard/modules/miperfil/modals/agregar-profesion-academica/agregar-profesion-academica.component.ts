import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-agregar-profesion-academica',
  templateUrl: './agregar-profesion-academica.component.html',
  styleUrls: ['./agregar-profesion-academica.component.scss']
})
export class AgregarProfesionAcademicaComponent {
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
  date = new Date()

  constructor(private dynamidialog: DynamicDialogRef) {}

  cerrarmodal() {
    this.dynamidialog.close()
  }
}
