import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { HistorialClinicaPacienteComponent } from './components/historial-clinica-paciente/historial-clinica-paciente.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  {
    path: 'historia-clinica',
    component: HistorialClinicaPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
