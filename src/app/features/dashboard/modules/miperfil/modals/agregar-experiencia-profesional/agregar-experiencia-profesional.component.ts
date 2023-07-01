import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-agregar-experiencia-profesional',
  templateUrl: './agregar-experiencia-profesional.component.html',
  styleUrls: ['./agregar-experiencia-profesional.component.scss']
})
export class AgregarExperienciaProfesionalComponent {
  constructor(private dynamidialog: DynamicDialogRef) {}

  cerrarmodal() {
    this.dynamidialog.close()
  }
}
